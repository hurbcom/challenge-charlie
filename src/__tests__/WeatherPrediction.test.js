import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';
import WeatherPrediction from '../pages/WeatherPrediction/WeatherPrediction';
import React from 'react';


describe.only('WeatherPrediction Component', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(
			<WeatherPrediction>
			</WeatherPrediction>
		);
	});

	it('Renders', () => {
		const WeatherPredictionComponent = renderer.create(<WeatherPrediction></WeatherPrediction>);
		expect(WeatherPredictionComponent).toMatchSnapshot();
	});
});