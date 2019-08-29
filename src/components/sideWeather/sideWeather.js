import React, { useState, useEffect } from 'react';
import './sideWeather.css'

export default function SideWeather(props) {
	const [ local, setLocal ]= useState({});
	const [ state, setState ] = useState({
		components: { 
			state: "N/A",
			city: "N/A"
		}
	});
	const [ weather, setWeather ] = useState({});
	const [ nextWeathers, setNextWeathers ] = useState({});
	const [ loading, setLoading ] = useState(true)
	const [ unit, setUnit] = useState({unitForm: 'metric', metricLetter: '°C', speed: 'km/h'})
	const [ colors , setColors ] = useState('#9e9e9ecc')

	useEffect(() => { 
		setLocal(props.location)
	},[props.location])

	useEffect(() => {
		const fetchUrl = async() => {
			const stateResponse = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${local.latitude}%2C${local.longitude}&key=c63386b4f77e46de817bdf94f552cddf&language=pt&pretty=1`);
			const jsonState = await stateResponse.json();
			const smallState = await jsonState.results[0]
			
			debugger
			if(await smallState){
				console.log(smallState.components.state)
				setState(smallState);
			}
		}
		fetchUrl()
	}, [local.latitude, local.longitude, props, props.location]);

	useEffect(() => {
		const fetchWeather = async() => {
			const weatherResponse = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${local.latitude}&lon=${local.longitude}&units=${unit.unitForm}&appid=7ba73e0eb8efe773ed08bfd0627f07b8`);
			const jsonWeather = await weatherResponse.json();
	
			if(await jsonWeather){
				console.log(jsonWeather)
				setWeather(jsonWeather);
			}
		}
		fetchWeather();
	}, [local.latitude, local.longitude, unit.unitForm]);

	useEffect(() => { 
		const fetchNextWeather = async() => {
			const nextWeatherResponse = await fetch(`http://api.openweathermap.org/data/2.5/forecast?id=${weather.id}&units=${unit.unitForm}&appid=7ba73e0eb8efe773ed08bfd0627f07b8&cnt=2`);
			const jsonNextWeather = await nextWeatherResponse.json();
			const listNextWeather = jsonNextWeather.list;
			if(listNextWeather){
				console.log(listNextWeather)
				setNextWeathers(listNextWeather);
				setLoading(false)
			}
		}
		fetchNextWeather();
	},[weather, unit.unitForm])

	useEffect(() => { 
		if(weather.weather){
			handleColors(weather.main.temp)
		}
		
	},[weather, unit.unitForm])

	function handleTemp() {
		if(unit.unitForm === 'metric') {
			setUnit({unitForm: 'imperial', metricLetter: '°F', speed: 'km/h'})
		} else {
			setUnit({unitForm: 'metric', metricLetter: '°C', speed: 'mph'})
		}
	}

	function handleColors(mainWeather) {
		debugger
		// const numberInt = Math.trunc(mainWeather)
		if(mainWeather <= 15){ 
			setColors('#31a3f6cc')
		} else if (15 < mainWeather < 35) {
			setColors('#ffeb3bd4')
		} else if( mainWeather > 35){
			setColors('#31a3f6cc')
		} else {
			setColors('gray')
		}
	}
  return (
		<>
		{ loading && state ? (
			"Loading..."
		) : ( 
			<div className="sideWeather" style={{ backgroundColor: colors}}>
				<div className="localWeather">
					<img src={require('../../assets/svg/44.svg')} alt="Localidade" />
					<h2>{state.components.state}, <br/>{state.components.city}</h2>
					
				</div>
				<div className='iconWeather'>
					<img src={require(`../../assets/svg/${weather.weather[0].main}.svg`)} alt="Localidade" />
					<div className=''>
						<p className='climaChange' onClick={() => handleTemp() }>HOJE <br /> {weather.main.temp} {unit.metricLetter}</p>
						<h3>{weather.weather[0].main} </h3>
						<p>
							Vento: {weather.wind.speed} {unit.speed} <br/>
							Humidade: {weather.main.humidity}%<br/>
							Pressão: {weather.main.pressure} hPA<br/>
						</p>
					</div>
				</div>
				<div className='tomorrowWeather' style={{ backgroundColor: colors}}>
					<h2>AMANHÃ <br/>{nextWeathers[0].main.temp} {unit.metricLetter}</h2>
				</div>
				<div className='dayAfterWeather'>
					<h2>DEPOIS DE AMANHÃ <br/>{nextWeathers[1].main.temp} {unit.metricLetter}</h2>
				</div>
			</div>
		 )}
    </>
  );
}
