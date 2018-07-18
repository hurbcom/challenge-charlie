import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { types, fetchCityWeather } from './index';

const createMockStore = configureMockStore([thunk]);
const store = createMockStore({ weather: { bkgImg: {}, city: {}, loading: true } });
const mock = new MockAdapter(axios);

describe('actions', () => {
    it('should creates an async action to fetch the fetchCityWeather', () => {
        const mockResponse = {
            query: {
                results: {
                    channel: {
                        units: {
                            distance: 'mi'
                        }
                    }
                }
            }
        };
        const expectedActions = [
            { type: types.FETCH_WEATHER },
            {
                type: types.FETCH_WEATHER_COMPLETE,
                payload: {
                    units: {
                        distance: 'mi'
                    }
                }
            }
        ];
        mock.onGet(
            `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22belo%20horizonte%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`
        ).reply(200, mockResponse);
        store
            .dispatch(fetchCityWeather('belo%20horizonte'))
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            })
            .catch(err => console.log(err));
    });
});
