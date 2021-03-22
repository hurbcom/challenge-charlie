import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext, themes } from '../Molecules/ThemeContext';
import Card from '../Molecules/Card';
import CardShimmer from '../Molecules/CardShimmer';
import Search from '../Molecules/Search';

function Weather() {
    const [loading, setLoading] = useState(false);
    const [theme, setTheme] = useState('');
    const [city, setCity] = useState('');
    const [temp, setTemp] = useState('');
    const [tempCards, setTempCards] = useState({});
    const [tempStatus, setTempStatus] = useState([]);
    const [units, setUnits] = useState('metric');
    const [whitchUnit, setwhitchUnit] = useState('celsius');
    const [hasErrorWeather, setHasErrorWeather] = useState(false);
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    //const KEY = 'c63386b4f77e46de817bdf94f552cddf';
    // const APPID = '7ba73e0eb8efe773ed08bfd0627f07b8';
    const KEY = '62f9f45570254385ae294f19d37ba5b7';
    const APPID = '6131be3cdf2a63f5583433d892c2f94f';

    useEffect(() => {
        // Get Geo Cordenates API
        const GetGeoCordenates = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(PositionCoords, GetErroFallBackHttp, { timeout: 1000 });
            }
        }

        // set latitude and longitude
        const PositionCoords = ((position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
        })

        // set default rio de janeiro when error getCurrentPosition set on http or gps
        const GetErroFallBackHttp = () => {
            setCity('rio de janeiro');
        }

        GetGeoCordenates();

        if (latitude !== '' && longitude !== '') {
            //set loading shimmer
            setLoading(true);

            const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${KEY}&pretty=1`;

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    setCity(data?.results[0]?.components?.city);
                    //stop loading shimmer
                    setLoading(false);
                })
                .catch(err => {
                     //continue loading shimmer
                    setLoading(false);
                    console.log(err, 'error');
                })
        }

    }, [latitude, longitude, setLoading])


    useEffect(() => {
        // Get Collect Weather Info API
        const urlWeather = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&cnt=3&lang=pt_br&appid=${APPID}`;
    
        if (city !== '' && units !== '') {
            //set loading shimmer
            setLoading(true);

            const CollectWeatherInfo = () => {
                fetch(urlWeather)
                    .then(res => res.json())
                    .then(dataWeather => {
                        setTemp(dataWeather.list[0].main.temp)
                        setTempCards({
                            amanha: dataWeather.list[1].main.temp,
                            depois:  dataWeather.list[2].main.temp
                        })
                        setTempStatus([ {
                                classInfo: 'info',
                                info: dataWeather?.list[0]?.weather[0]?.description
                            },
                            {
                                classInfo: 'air',
                                name: 'Vento:',
                                type: dataWeather?.list[0]?.wind?.speed,
                                unit: 'Km/h'
                            },
                            {
                                classInfo: 'air',
                                name: 'Humidade:',
                                type: dataWeather?.list[0]?.main?.humidity,
                                unit: '%'
                            },
                            {
                                classInfo: 'air',
                                name: 'Pressão',
                                type: dataWeather?.list[0]?.main?.pressure,
                                unit: 'hPA'
                            }
                            
                        ])
                        //stop loading shimmer
                        setLoading(false)
                        setHasErrorWeather(false)
                    })
                    .catch(err => {
                        setHasErrorWeather(true)
                        setCity('cidade não encontrada!')
                        //continue loading shimmer
                        setLoading(false)
                        console.log(err, 'error')
                    })
            }
            CollectWeatherInfo();
        }

    }, [city, units, setLoading])

    useEffect(() => {
        // format for more legibility, set theme main
        var parametersUnits = {
            celsius: {
                cold: 15,
                sunny: 35
            },
            fahrenheit: {
                cold: 59,
                sunny: 95
            }
        };

        if (hasErrorWeather || temp === '') {
            setTheme(themes.noInfo)
        } else {
            if (temp <= parametersUnits[whitchUnit].cold) {
                setTheme(themes.cold);
            } else if (temp >= parametersUnits[whitchUnit].sunny) {
                setTheme(themes.sunny);
            } else {
                setTheme(themes.normal);
            }
        }

    }, [temp, whitchUnit, hasErrorWeather])

    // change city parameters api
    const ChangeCity = (value, status) => {
        if (status !== false){
            setCity(value)
        }
    }

    // change units parameters api
    const ChangeMeters = () => {
        if (units === 'metric') {
            setUnits('imperial');
            setwhitchUnit('fahrenheit');
        } else {
            setUnits('metric');
            setwhitchUnit('celsius')
        }
    }
    
    return (
        <ThemeContext.Provider value={{ theme, city, temp, whitchUnit, tempCards, tempStatus, ChangeCity, ChangeMeters }}>
            <div className='weather'>
                <div className="weather__wrapper">
                    <>
                        <Search />
                        {
                            !loading ?
                                <Card/>
                                : <CardShimmer />
                        }
                    </>
                </div>
            </div>
        </ThemeContext.Provider>
    )
}

Weather.propTypes = {
    ThemeContext: PropTypes.shape({
        theme: PropTypes.string,
        city: PropTypes.string,
        whitchUnit: PropTypes.string,
        tempCards: PropTypes.object,
        tempStats: PropTypes.object,
        ChangeCity: PropTypes.func,
        ChangeMeters: PropTypes.func,
    })
}

export default Weather;
