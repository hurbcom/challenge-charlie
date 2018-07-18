import React from 'react';
import { shallow, mount } from 'enzyme';
import { App } from './App';

describe('App', () => {
    let props = {
        bkgImg: {},
        city: {},
        loading: true
    };
    let app = shallow(<App {...props} />);
    // Smoke Test
    it('should renders properly', () => {
        expect(app).toMatchSnapshot();
    });
    describe('should when mounted', () => {
        const mockGeolocation = {
            getCurrentPosition: jest.fn()
        };
        global.navigator.geolocation = mockGeolocation;
        const mockFetchBingData = jest.fn();
        const mockFetchCityWeather = jest.fn();
        beforeEach(() => {
            props.fetchBingData = mockFetchBingData;
            props.fetchCityWeather = mockFetchCityWeather;
            app = mount(<App {...props} />);
        });
        it('should dispatches the `fetchBingData()` method it receives from props', () => {
            expect(mockFetchBingData).toHaveBeenCalled();
        });
        it('should dispatches the `fetchCityWeather()` method it receives from props', () => {
            expect(mockFetchCityWeather).toHaveBeenCalled();
        });
    });
});
