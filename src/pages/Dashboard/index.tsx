import React, { useEffect, useState, useCallback, useRef } from 'react';
import axios, { AxiosInstance } from 'axios';
import { useTranslation } from 'react-i18next';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FiMap } from 'react-icons/fi';

// import bingAPI from '../../services/bingAPI';
import weatherAPI from '../../services/weatherAPI';

import InitializeIDayProps from './utils/InitializeIDayProps';

import brazilianFlag from '../../assets/bra.svg';
import USAFlag from '../../assets/usa.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
    Container,
    Header,
    Content,
    Location,
    Days,
    Today,
    Tomorrow,
    AfterTomorrow,
    Weather,
} from './styles';

interface IDayProps {
    temp: {
        day: number;
    },
    weather: [
        {
            description: string;
            icon: string;
        }
    ],
    pressure: number;
    humidity: number;
    speed: number;
}

interface IListDaysProps {
    city: {
        name: string;
    },
    list: [
        IDayProps,
        IDayProps,
        IDayProps
    ]
}

interface SearchFormData {
    state: string;
    city: string;
}

const Dashboard: React.FC = () => {
    const { t, i18n } = useTranslation();

    const formRef = useRef<FormHandles>(null);

    // const [image, setImage] = useState<string>('');
    const [longitude, setLongitude] = useState<number>(0);
    const [latitude, setLatitude] = useState<number>(0);
    const [state, setState] = useState<string>('');
    const [city, setCity] = useState<string>('');
    const [today, setToday] = useState<IDayProps>(
        InitializeIDayProps as IDayProps
    );
    const [tomorrow, setTomorrow] = useState<IDayProps>(
        InitializeIDayProps as IDayProps
    );
    const [afterTomorrow, setAfterTomorrow] = useState<IDayProps>(
        InitializeIDayProps as IDayProps
    );
    const [icon, setIcon] = useState<string>('icon-');
    const [isSearch, setIsSearch] = useState<boolean>(false);
    const [isCelsius, setIsCelsius] = useState<boolean>(true);
    const [isFahrenheit, setIsFahrenheit] = useState<boolean>(false);
    const [language, setLanguage] = useState<string>('pt_br');
    const [units, setUnits] = useState<string>('metric');
    const [tempUnit, setTempUnit] = useState<string>('°C');

    // To serve as a reference to css
    const [tempCelsiusToday, setTempCelsiusToday] = useState<number>(0);
    const [tempCelsiusTomorrow, setTempCelsiusTomorrow] = useState<number>(0);
    const [
        tempCelsiusAfterTomorrow,
        setTempCelsiusAfterTomorrow
    ] = useState<number>(0);

    const key = 'c63386b4f77e46de817bdf94f552cddf';
    const appid = '08dbab0eeefe53317d2e0ad7c2a2e060';

    // When call api to load the weather
    const loadWeather = useCallback(async(
        city: string,
        weatherAPI: AxiosInstance
    ): Promise<void> => {
        await weatherAPI
            .get<IListDaysProps>(
                `/forecast/daily?q=${city}&APPID=${appid}&cnt=3&units=${units}&lang=${language}`
            )
            .then(response => {
                const today = response.data.list[0];
                setToday(today);
                setTempCelsiusToday(today.temp.day);

                // If a city search is made
                if(isSearch) {
                    // Treat the icon by removing the previous value
                    const formattedIcon = icon.substring(0, 5); // icon-
                    setIcon(formattedIcon);

                    if(isFahrenheit) {
                        // Force the initial temp unit to be Celsius
                        setTempUnit('°C');

                        setIsCelsius(true);
                        setIsFahrenheit(false);
                    }

                    // setCity(response.data.city.name);

                    setIsSearch(false);
                }

                // Join 'icon-' with icon that comes from the api response
                setIcon(icon => icon.concat(today.weather[0].icon));

                setTomorrow(response.data.list[1]);
                setTempCelsiusTomorrow(response.data.list[1].temp.day);

                setAfterTomorrow(response.data.list[2]);
                setTempCelsiusAfterTomorrow(
                    response.data.list[2].temp.day
                );
            });
    }, [city]);

    const handleChangeLanguage = useCallback((lng: string) => {
        i18n.changeLanguage(lng);

        setLanguage(lng);
    }, [i18n]);

    const handleSubmitCity = useCallback((data: SearchFormData) => {
        setIsSearch(true);

        const { state, city } = data;

        setState(state);
        setCity(city);
    }, []);

    const handleClickTemp = useCallback(() => {
        // Conversions
        if(isCelsius) {
            const celsiusToday = today.temp.day;
            today.temp.day = (Math.round(((celsiusToday * 9/5) + 32) * 100) / 100);

            const celsiusTomorrow = tomorrow.temp.day;
            tomorrow.temp.day = (Math.round(((celsiusTomorrow * 9/5) + 32) * 100) / 100);

            const celsiusAfterTomorrow = afterTomorrow.temp.day;
            afterTomorrow.temp.day = (Math.round(((celsiusAfterTomorrow * 9/5) + 32) * 100) / 100);

            setTempUnit('°F');
        } else {
            const fahrenheitToday = today.temp.day;
            today.temp.day = (Math.round((fahrenheitToday - 32) * 5/9 * 100) / 100);

            const fahrenheitTomorrow = tomorrow.temp.day;
            tomorrow.temp.day = (Math.round((fahrenheitTomorrow - 32) * 5/9 * 100) / 100);

            const fahrenheitAfterTomorrow = afterTomorrow.temp.day;
            afterTomorrow.temp.day = (Math.round((fahrenheitAfterTomorrow - 32) * 5/9 * 100) / 100);

            setTempUnit('°C');
        }

        setIsCelsius(!isCelsius);
        setIsFahrenheit(!isFahrenheit);
    }, [
        today.temp.day,
        tomorrow.temp.day,
        afterTomorrow.temp.day,
        isCelsius,
        isFahrenheit
    ]);

    // When latitude or longitude change
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            const lon = position.coords.longitude;
            const lat = position.coords.latitude;

            if(lat && lon) {
                setLongitude(lon);
                setLatitude(lat);
            }
        });

        const geoAPI = axios.create({
            baseURL: `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${key}&language=pt_br`,
        });

        async function loadLocation(): Promise<void> {
            await geoAPI.get('/').then(response => {
                const state = response.data.results[0].components.state;
                const city = response.data.results[0].components.city;

                if(state && city) {
                    setState(state);
                    setCity(city);
                }
            });
        }
        loadLocation();
    }, [latitude, longitude]);

    // When city changes
    useEffect(() => {
        // Treat the city by removing spaces
        const formattedCity = city.replace(/\s/g, '+').trim();

        if(formattedCity) {
            loadWeather(formattedCity, weatherAPI);
        }
    }, [loadWeather, city]);

    return (
        <Container>
            <Header>
                <main>
                    <div>
                        <img
                            src="https://avatars1.githubusercontent.com/u/7063040?v=4&s=200.jpg"
                            alt="HU"
                            width="50"
                            height="50"
                        />

                        <Form ref={formRef} onSubmit={handleSubmitCity}>
                            <Input
                                name="state"
                                icon={FiMap}
                                type="text"
                                placeholder={t('state')}
                            />

                            <Input
                                name="city"
                                icon={FiMap}
                                type="text"
                                placeholder={t('city')}
                            />

                            <Button type="submit" loading={isSearch}>
                                {t('search')}
                            </Button>
                        </Form>
                    </div>

                    <div>
                        <button
                            type="button"
                            onClick={() => handleChangeLanguage('pt_br')}
                        >
                            <img src={brazilianFlag} alt="pt_br"/>
                        </button>

                        <button
                            type="button"
                            onClick={() => handleChangeLanguage('en')}
                        >
                            <img src={USAFlag} alt="en"/>
                        </button>
                    </div>
                </main>
            </Header>

            <Content>
                <Location>
                    <i className="icon-compass"></i>

                    <p>{state},</p>
                    <p>{city}</p>
                </Location>

                <Days>
                    <Today
                        celsius={tempCelsiusToday}
                        city={city}
                    >
                        <i className={icon}></i>

                        <Weather>
                            <time>{t('today')}</time>
                            <span onClick={handleClickTemp}>
                                {today.temp.day} {tempUnit}
                            </span>

                            <p>{today.weather[0].description}</p>

                            <div>
                                <p>{t('wind')}: {today.speed} km/h</p>
                                <p>{t('humidity')}: {today.humidity}%</p>
                                <p>{t('pressure')}: {today.pressure}hPA</p>
                            </div>
                        </Weather>
                    </Today>

                    <Tomorrow
                        celsius={tempCelsiusTomorrow}
                        city={city}
                    >
                        <Weather>
                            <time>{t('tomorrow')}</time>
                            <span onClick={handleClickTemp}>
                                {tomorrow.temp.day} {tempUnit}
                            </span>
                        </Weather>
                    </Tomorrow>

                    <AfterTomorrow
                        celsius={tempCelsiusAfterTomorrow}
                        city={city}
                    >
                        <Weather>
                            <time>{t('after tomorrow')}</time>
                            <span onClick={handleClickTemp}>
                                {afterTomorrow.temp.day} {tempUnit}
                            </span>
                        </Weather>
                    </AfterTomorrow>
                </Days>
            </Content>
        </Container>
    );
};

export default Dashboard;