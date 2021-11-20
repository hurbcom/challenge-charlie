import 'regenerator-runtime/runtime';
import { shallowMount } from '@vue/test-utils';
import App from '@/App.vue';

describe('Unit test for App', () => {
    let wrapper;

    beforeAll(() => {
        wrapper = shallowMount(App);
    });

    test('is a vue instance', () => {
        expect(wrapper.isVueInstance()).toBeTruthy();
    });
});