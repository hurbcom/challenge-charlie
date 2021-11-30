import 'regenerator-runtime/runtime';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';

import App from '@/App.vue';
import Search from '@/components/Search.vue';
import Weather from '@/components/Weather.vue';

import appStore from '@/store/modules/app';
import searchStore from '@/store/modules/search';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('App Component', () => {
    let component;
    let store;

    beforeAll(() => {
        store = new Vuex.Store({
            modules: {
                app: appStore,
                search: searchStore
            },
        });
        store.dispatch = jest.fn();

        component = shallowMount(App, { store, localVue });
    });

    describe('Unit tests', () => {
        describe('Validating data and methods', () => {
            test('showCelsius should start with true', () => {
                expect(component.vm.showCelsius).toBe(true);
            });

            test('showCelsius should return false when I call changeTemperatureType("F")', () => {
                component.vm.changeTemperatureType('F');
                expect(component.vm.showCelsius).toBe(false);
            });

            test('showCelsius should return true when I call changeTemperatureType("C")', () => {
                component.vm.changeTemperatureType('C');
                expect(component.vm.showCelsius).toBe(true);
            });
        });

        describe('Validating computed data', () => {
            test('weathers should starts with an empty array', () => {
                expect(component.vm.weathers).toEqual([]);
            });

            test('backgroundProps should return empty background-image', () => {
                expect(component.vm.backgroundProps).toEqual({'background-image': 'url()'});
            });

            test('should change backgroundProps', async () => {
                const backgroundImage = '/new-image.png';
                store.commit('app/SET_URL_BACKGROUND_IMAGE', backgroundImage);

                await component.vm.$nextTick();

                expect(component.vm.backgroundProps)
                    .toEqual({
                        'background-image': `url(${appStore.state.baseApiImageBackground}${backgroundImage})`
                    });
            });
        });

        describe('On create component', () => {
            test('should dispatch getImageBackground', () => {
                expect(store.dispatch).toHaveBeenCalledWith('app/getImageBackground');
            });
        });
    });

    describe('Component tests', () => {
        test('is vue component', async () => {
            expect(component.exists()).toBe(true)
        });

        test('should see Search component', () => {
            expect(component.findComponent(Search).exists()).toBe(true);
        });

        test('should not see Weather component if does not have values in weathers', () => {
            expect(component.findComponent(Weather).exists()).toBe(false);
        });

        test('should see Weather component if have values in weathers', async () => {
            const weathers = [
                {
                    tempC: null,
                    tempF: null,
                    description: '',
                    pressure: null,
                    humidity: null,
                    wind: null,
                    dt_txt: null,
                }
            ];

            store.commit('search/SET_WEATHERS', weathers);
            await component.vm.$nextTick();

            expect(component.findComponent(Weather).exists()).toBe(true);
            expect(component.findAllComponents(Weather).length).toBe(1);
        });

        test('should see only 3 Weather component when I set weathers with more than 3', async () => {
            const weathers = [
                {
                    tempC: null,
                    tempF: null,
                    description: '',
                    pressure: null,
                    humidity: null,
                    wind: null,
                    dt_txt: null,
                },
                {
                    tempC: null,
                    tempF: null,
                    description: '',
                    pressure: null,
                    humidity: null,
                    wind: null,
                    dt_txt: null,
                },
                {
                    tempC: null,
                    tempF: null,
                    description: '',
                    pressure: null,
                    humidity: null,
                    wind: null,
                    dt_txt: null,
                },
                {
                    tempC: null,
                    tempF: null,
                    description: '',
                    pressure: null,
                    humidity: null,
                    wind: null,
                    dt_txt: null,
                },
            ];

            store.commit('search/SET_WEATHERS', weathers);
            await component.vm.$nextTick();

            expect(component.findAllComponents(Weather).length).toBe(3);
        });
    });
});