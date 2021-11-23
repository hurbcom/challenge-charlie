import 'regenerator-runtime/runtime';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';

import Search from '@/components/Search.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Search Component', () => {
    let component;
    let store;

    const searchModule = {
        namespaced: true,
        state: {
            latLong: {},
            userLocation: '',
            prevUserLocation: '',
            searching: false,
            weathers: [],
        },
        mutations: {
            SET_LAT_LONG(state, payload) {
                state.latLong = payload;
            },
            SET_USER_LOCATION(state, payload) {
                state.userLocation = payload;
            },
            SET_PREV_USER_LOCATION(state, payload) {
                state.prevUserLocation = payload;
            },
            SET_SEARCHING(state, payload) {
                state.searching = payload;
            },
            SET_WEATHERS(state, payload) {
                state.weathers = payload;
            }
        },
        actions: {
            getUserCurrentPosition: jest.fn(),
            convertLatLongInLocation: jest.fn(),
            fetchWeatherInformation: jest.fn(),
        }
    };

    beforeAll(() => {
        store = new Vuex.Store({
            state: {},
            modules: {
                search: { ...searchModule }
            },
        });
        store.dispatch = jest.fn();

        component = shallowMount(Search, {
            store,
            localVue
        });
    });

    beforeEach(() => {
        jest.resetAllMocks();
    });

    describe('Unit tests', () => {
        describe('Validating methods', () => {
            test('should dispatch search/getUserCurrentPosition when call getUserCurrentLatLong()', () => {
                component.vm.getUserCurrentLatLong();
                expect(store.dispatch).toHaveBeenCalledWith('search/getUserCurrentPosition');
            });

            test('should dispatch search/fetchWeatherInformation when call fetchWeatherInformation()', () => {
                component.vm.fetchWeatherInformation();
                expect(store.dispatch).toHaveBeenCalledWith('search/fetchWeatherInformation');
            });
        });
    });

    describe('Component tests', () => {
        test('should see an icon and a input text', () => {
            const icon = component.find('.icon').exists();
            const text = component.find('input[type="text"]').exists();

            expect(icon).toBe(true);
            expect(text).toBe(true);
        });

        test('should call fetchWeatherInformation() when click on icon', () => {
            const fetchWeatherInformationSpy = jest.spyOn(component.vm, 'fetchWeatherInformation');

            component.find('.icon').trigger('click');

            expect(fetchWeatherInformationSpy).toHaveBeenCalledTimes(1);
        });

        test('should call fetchWeatherInformation() when on press enter in the field', () => {
            const fetchWeatherInformationSpy = jest.spyOn(component.vm, 'fetchWeatherInformation');

            const inputSearch = component.find('input');
            inputSearch.trigger('keypress.enter');

            expect(fetchWeatherInformationSpy).toHaveBeenCalledTimes(1);
        });
    });
});