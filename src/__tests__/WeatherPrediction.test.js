import renderer from 'react-test-renderer';
import WeatherPrediction from '../pages/WeatherPrediction/WeatherPrediction';
import React from 'react';



describe.only('WeatherPrediction Component', () => {

	beforeEach(() => {
	});

	it('Renders', () => {
		const WeatherPredictionComponent = renderer.create(<WeatherPrediction></WeatherPrediction>);
		expect(WeatherPredictionComponent).toMatchSnapshot();
	});
});