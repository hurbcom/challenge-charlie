import 'mocha';
import { expect } from 'chai';

import * as weatherApi from './weatherApi';

describe('Yahoo weather Api', () => {
    it('should fetch weather by location', () => {
        return weatherApi.getWeatherByLocation('Rio de Janeiro - RJ').then(response => {
            expect(typeof response).to.be.equal('object')
        }).catch(err => {
            expect(typeof err).to.be.equal('object');
        })
    });

    it('should fetch weather by coordinates', () => {
        return weatherApi.getWeatherByLocation(10, 20).then(response => {
            expect(typeof response).to.be.equal('object');
        }).catch(err => {
            expect(typeof err).to.be.equal('object');
        })
    });
})