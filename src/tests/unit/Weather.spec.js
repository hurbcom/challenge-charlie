import 'regenerator-runtime/runtime';
import { shallowMount } from '@vue/test-utils';

import Weather from '@/components/Weather.vue';

describe('Weather Component', () => {
    let component;

    const defaultPropsToday = {
        weather: {
            tempC: 0,
            tempF: 32,
            description: 'nublado',
            pressure: 1003,
            humidity: 30,
            wind: 'Norte 5Km/h'
        },
        title: 'Hoje',
        showCelsius: true,
    };

    const defaultPropsTomorrow = {
        weather: {
            tempC: 40,
            tempF: 104,
            description: 'céu limpo',
            pressure: 1003,
            humidity: 30,
            wind: 'Norte 5Km/h'
        },
        title: 'Amanhã',
        showCelsius: false,
    };

    beforeAll(() => {
        component = shallowMount(Weather, {
            propsData: {
                ...defaultPropsToday,
            },
        });
    });

    beforeEach(async () => {
        if (component.vm.title !== defaultPropsToday.title) {
            await component.setProps(defaultPropsToday);
        }

        jest.resetAllMocks();
    });

    describe('Unit tests', () => {
        describe('Validating methods', () => {
            test('should emit "changeTemperatureType" when call toggleTemperature', () => {
                const emitSpy = jest.spyOn(component.vm, '$emit');

                component.vm.toggleTemperature('F');

                expect(emitSpy).toHaveBeenCalledWith('changeTemperatureType', 'F');
            });

            test('should return a default icon ")" when I call generateIcon with invalid temperatureDescription', () => {
                const icon = component.vm.generateIcon('asdfasdf');
                expect(icon).toEqual(')');
            });

            test('should return "B" when I call generateIcon with "céu limpo"', () => {
                const icon = component.vm.generateIcon('céu limpo');
                expect(icon).toEqual('B');
            });

            test('should return yellow and tone-*', () => {
                const defaultColor = 'yellow';
                const colorAndTone = component.vm.generateColorTones(defaultColor);

                const hasColorAndTone = colorAndTone.includes(`${defaultColor} tone-`);

                expect(hasColorAndTone).toBe(true);
            });
        });

        describe('Validating computed data', () => {
            test('backgroundColorProps should return "blue tone-*"', () => {
                const backgroundColorProps = component.vm.backgroundColorProps.includes('blue tone-');

                expect(backgroundColorProps).toBe(true);
            });

            test('backgroundColorProps should return "red tone-*"', () => {
                component.vm.weather.tempC = defaultPropsTomorrow.weather.tempC;

                const backgroundColorProps = component.vm.backgroundColorProps.includes('red tone-');

                expect(backgroundColorProps).toBe(true);
            });

            test('today should return true', () => {
                expect(component.vm.today).toBe(true);
            });

            test('today should return false', async () => {
                await component.setProps(defaultPropsTomorrow);

                expect(component.vm.today).toBe(false);
            });
        });
    });

    describe('Component tests', () => {
        test('should see an icon if is Today', () => {
            const iconClass = component.find('.icon-weather .icon').exists();
            const iconClassNoHide = component.find('.icon-weather .icon.hide').exists();

            expect(iconClass).toBe(true);
            expect(iconClassNoHide).toBe(false);
        });

        test('should not see an icon if is not Today', async () => {
            await component.setProps(defaultPropsTomorrow);

            const iconClass = component.find('.icon-weather .icon').exists();
            const iconClassHide = component.find('.icon-weather .icon.hide').exists();

            expect(iconClass).toBe(true);
            expect(iconClassHide).toBe(true);
        });

        test('should call toggleTemperature when click over temperature', async () => {
            const toggleTemperatureSpy = jest.spyOn(component.vm, 'toggleTemperature');
            const temperatureButton = component.find('.details-weather .temperature');

            temperatureButton.trigger('click');
            await component.vm.$nextTick();

            expect(toggleTemperatureSpy).toHaveBeenCalledWith('F');
        });
    });
});