import 'mocha';
import { expect } from 'chai';

import * as bingApi from './bingApi';

describe('Bing Api', () => {
    it('should fetch image url correctly', () => {
        return bingApi.getBackgroundImage().then(response => {
            expect(typeof response).to.be.equal('string');
        }).catch(err => {
            expect(response).to.be.eq('');
        });
    })
})