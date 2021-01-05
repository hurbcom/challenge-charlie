import React, { useState, useEffect, useContext } from 'react';
import services from '../../services';
import config from '../../../config';
import { errorMessages } from '../../const/error.json';
import { TemperatureRangeContext } from '../../context/TemperatureRangeProvider';
import Devices from '../../const/responsiveness';

//components
import SearchBar from '../../components/SearchBar/SearchBar';
import Loader from '../../components/Loader/Loader';
import { WiDaySunny } from 'weather-icons-react';
import Geocode from 'react-geocode';

//styles
import {
	WeatherPredictionStyle,
	WeatherSection,
	SunIcon,
	WeatherDetails,
	WeatherDetailsTitle,
	WeatherDetailsTitleWrapper,
	Filler
} from './WeatherPrediction.styles';

const temperatureRangeCodes = {
	COLD: 1,
	AVERAGE: 2,
	HOT: 3
};

const setUpGoogleAPI = () => {
	Geocode.setApiKey(config.GOOGLE_API.KEY);
	Geocode.setRegion(config.GOOGLE_API.COUNTRY);
	Geocode.enableDebug();
};

export default function WeatherPrediction() {
	const [weather, setWeather] = useState({});
	const [address, setAddress] = useState({});
	const [city, setCity] = useState('');
	const [loading, setLoading] = useState(false);
	const [sunnySize, setSunnySize] = useState(400);

	const { temperatureRange, setTemperatureRange } = useContext(TemperatureRangeContext);

	const { width } = useWindowSize();

	const searchAndSetWeather = async (city, state) => {
		setLoading(true);
		try {
			const response = await services.weather.getWeather(city, state);
			setWeather({ ...response });
			setLoading(false);
			switch (true) {
			case response.temp > 35:
				setTemperatureRange(temperatureRangeCodes.HOT);
				break;
			case response.temp < 15:
				setTemperatureRange(temperatureRangeCodes.COLD);
				break;
			default:
				setTemperatureRange(temperatureRangeCodes.AVERAGE);
				break;
			}
		} catch (err) {
			console.error(err);
			alert(err);
		}
	};

	useEffect(() => {
		setUpGoogleAPI();

		function getGeoCoordinates() {
			return new Promise((resolve, reject) => {
				if ('geolocation' in navigator) {
					navigator.geolocation.getCurrentPosition(({ coords: Coordinates }) => {
						const coords = {
							latitude: Coordinates.latitude,
							longitude: Coordinates.longitude
						};
						resolve(coords);
					});
				} else {
					reject();
				}
			});
		}

		getGeoCoordinates().then(({ latitude, longitude }) => {
			Geocode.fromLatLng(latitude, longitude).then(
				({ results }) => {
					const formattedAddress = results[0].formatted_address;
					setAddress({
						number: results[0].address_components[0].long_name,
						street: results[0].address_components[1].long_name,
						neighborhood: results[0].address_components[2].long_name,
						city: results[0].address_components[3].long_name,
						state: results[0].address_components[4].long_name,
						country: results[0].address_components[5].long_name,
						zipCode: results[0].address_components[6].long_name,
						fullAddress: formattedAddress
					});
				},
				(error) => {
					console.error(error);
				}
			);
		});
	}, []);

	useEffect(() => {
		if (Object.keys(address).length > 0) {
			const city = address.city.toLowerCase();
			const state = address.state.toLowerCase();
			searchAndSetWeather(city, state);
		}
	}, [address]);

	const searchCity = (e) => {
		e.preventDefault();
		const citySplit = city.split(', ');
		const cityValue = citySplit[0];
		const stateValue = citySplit[1];
		if (cityValue && stateValue) {
			searchAndSetWeather(cityValue.toLowerCase(), stateValue.toLowerCase());
		} else {
			console.error(errorMessages.missingCityOrState.message);
			alert(errorMessages.missingCityOrState.message);
		}
	};

	// Hook
	function useWindowSize() {
		// Initialize state with undefined width/height so server and client renders match
		// Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
		const [windowSize, setWindowSize] = useState({
			width: undefined,
			height: undefined,
		});

		useEffect(() => {
			// Handler to call on window resize
			function handleResize() {
				// Set window width/height to state
				setWindowSize({
					width: window.innerWidth,
					height: window.innerHeight,
				});
			}

			// Add event listener
			window.addEventListener('resize', handleResize);

			// Call handler right away so state gets updated with initial window size
			handleResize();

			// Remove event listener on cleanup
			return () => window.removeEventListener('resize', handleResize);
		}, []); // Empty array ensures that effect is only run on mount

		return windowSize;
	}

	useEffect(() => {
		if (width <= Devices.MEDIUM_SCREEN.split('px')[0]) setSunnySize(250);
		if (width > Devices.MEDIUM_SCREEN.split('px')[0]) setSunnySize(400);
	}, [width]);

	return (
		<WeatherPredictionStyle>
			<SearchBar
				address={
					Object.keys(address).length !== 0 && address.constructor == Object ? address : null
				}
				city={city}
				setCity={setCity}
				searchCity={searchCity}
				loading={loading}
			></SearchBar>
			<WeatherSection bgcolor={temperatureRange} mode={'dark'}>
				<SunIcon>
					<WiDaySunny size={sunnySize} color="#fefefe"></WiDaySunny>
				</SunIcon>
				<WeatherDetails>
					<WeatherDetailsTitleWrapper>
						<WeatherDetailsTitle>Today</WeatherDetailsTitle>
						{Object.keys(weather).length > 0 && <WeatherDetailsTitle>{weather.temp}°C</WeatherDetailsTitle>}
					</WeatherDetailsTitleWrapper>
					<WeatherDetailsTitleWrapper>
						{Object.keys(weather).length > 0 && (
							<>
								<WeatherDetailsTitle>{weather.description}</WeatherDetailsTitle>
								<WeatherDetailsTitle>Wind: {weather.speed}km/h</WeatherDetailsTitle>
								<WeatherDetailsTitle>Humidity: {weather.humidity}%</WeatherDetailsTitle>
								<WeatherDetailsTitle>Pressure: {weather.pressure}hPA</WeatherDetailsTitle>
							</>
						)}
						{Object.keys(weather).length <= 0 &&  <Loader></Loader>}
					</WeatherDetailsTitleWrapper>
				</WeatherDetails>
			</WeatherSection>
			<WeatherSection bgcolor={temperatureRange} mode={'medium'}>
				<Filler></Filler>
				<WeatherDetails>
					<WeatherDetailsTitle>Tomorrow</WeatherDetailsTitle>
					<WeatherDetailsTitle>10°C</WeatherDetailsTitle>
				</WeatherDetails>
			</WeatherSection>
			<WeatherSection bgcolor={temperatureRange} mode={'light'}>
				<Filler></Filler>
				<WeatherDetails>
					<WeatherDetailsTitle>After tomorrow</WeatherDetailsTitle>
					<WeatherDetailsTitle>20°C</WeatherDetailsTitle>
				</WeatherDetails>
			</WeatherSection>
		</WeatherPredictionStyle>
	);
}
