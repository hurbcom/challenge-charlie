import Vue from "vue";
import { expect } from "chai";
import Weather from "@/components/Weather.vue";


describe('Weather', () => {
    it('Check data exist', () => {
        expect(typeof Weather.data).to.equal('function');
    })
})