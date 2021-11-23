import 'regenerator-runtime/runtime';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import flushPromises from 'flush-promises';
import * as axios from '../__mocks__/axios';

import App from '@/App.vue';
import Search from '@/components/Search.vue';
import Weather from '@/components/Weather.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

// jest.mock('axios', () => ({
//     get: Promise.resolve({
//         data: {
//             images: [
//                 { url: '/value' }
//             ]
//         }
//     })
// }));
// jest.mock('axios', () => jest.fn(() => Promise.resolve({ data: { images: [ { url: '/value' } ] } })));

describe('App Component', () => {
    let component;
    let store;
    let appStore = {
        state: {
            urlForBackgroundImage: '',
        },
        mutations: {
            SET_URL_BACKGROUND_IMAGE(state, payload) {
                state.urlForBackgroundImage = payload;
            },
        },
        actions: {
            getImageBackground: jest.fn()
        }
    };

    const searchModule = {
        namespaced: true,
        state: {
            weathers: [],
        },
        mutations: {
            SET_WEATHERS(state, payload) {
                state.weathers = payload;
            }
        }
    }

    beforeAll(() => {
        store = new Vuex.Store({
            ...appStore,
            modules: {
                search: searchModule
            },
        });

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
                const backgroundImage = 'http://www.test.com/image.png';
                store.commit('SET_URL_BACKGROUND_IMAGE', backgroundImage);

                await component.vm.$nextTick();

                expect(component.vm.backgroundProps).toEqual({'background-image': `url(${backgroundImage})`});
            });
        });

        describe('On create component', () => {
            test('should dispatch getImageBackground', () => {
                expect(appStore.actions.getImageBackground).toHaveBeenCalled();
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


    // describe('On create component', () => {
    //     test('should call getImageBackground()', () => {
    //         const getImageBackground = jest.fn();
    //         wrapper = shallowMount(App, {
    //             methods: {
    //                 getImageBackground
    //             }
    //         });

    //         expect(getImageBackground).toHaveBeenCalled();
    //     });

    //     test('should set a value for urlForBackgroundImage', async () => {
    //         const wrapper = shallowMount(App);
    //         expect(wrapper.vm.urlForBackgroundImage).toEqual('');

    //         wrapper.vm.getImageBackground();
    //         await flushPromises();

    //         expect(wrapper.vm.urlForBackgroundImage).toEqual('http://www.bing.com/value');
    //     });

    //     test('should define a value for backgroundProps', async () => {
    //         const wrapper = shallowMount(App);
    //         const bgProps = {'background-image': `url(http://www.bing.com/value)`};

    //         wrapper.vm.getImageBackground();
    //         await flushPromises();

    //         expect(wrapper.vm.backgroundProps).toEqual(bgProps);
    //     });
    // });

});