import 'regenerator-runtime/runtime';
import { shallowMount } from '@vue/test-utils';
import flushPromises from 'flush-promises';
import * as axios from '../__mocks__/axios';

import App from '@/App.vue';

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

describe('Unit test for App', () => {
    let wrapper;

    beforeAll(() => {
        wrapper = shallowMount(App);
    });

    test('is a vue instance', () => {
        expect(wrapper.isVueInstance()).toBeTruthy();
    });

    describe('On create component', () => {
        test('should call getImageBackground()', () => {
            const getImageBackground = jest.fn();
            wrapper = shallowMount(App, {
                methods: {
                    getImageBackground
                }
            });

            expect(getImageBackground).toHaveBeenCalled();
        });

        test('should set a value for urlForBackgroundImage', async () => {
            const wrapper = shallowMount(App);
            expect(wrapper.vm.urlForBackgroundImage).toEqual('');

            wrapper.vm.getImageBackground();
            await flushPromises();

            expect(wrapper.vm.urlForBackgroundImage).toEqual('http://www.bing.com/value');
        });

        test('should define a value for backgroundProps', async () => {
            const wrapper = shallowMount(App);
            const bgProps = {'background-image': `url(http://www.bing.com/value)`};

            wrapper.vm.getImageBackground();
            await flushPromises();

            expect(wrapper.vm.backgroundProps).toEqual(bgProps);
        });
    });

});