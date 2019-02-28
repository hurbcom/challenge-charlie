import Vue from "vue";
import { expect } from "chai";
import Weather from "@/components/Weather.vue";


describe('Weather', () => {
    it('Check data exist', () => {
        expect(typeof Weather.data).to.equal('function');
    });
    it('Check data lat not definied', () => {
        expect(Weather.data.lat).to.equal(undefined);
    });
    it('Check data long not definied', () => {
        expect(Weather.data.long).to.equal(undefined);
    });
})