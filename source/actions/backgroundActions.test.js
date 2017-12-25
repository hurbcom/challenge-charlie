import 'mocha';
import { expect } from 'chai';

import { loadBackgroundSuccess } from './backgroundActions.js';
import * as constants from '../constants.js';

describe('loadBackgroundSuccess', () => {
    it('should dispatch type load background success', () => {
        const result = loadBackgroundSuccess('someurl');

        expect(result.type).to.be.equal(constants.LOAD_BACKGROUND_SUCCESS);
        expect(result.backgroundUrl).to.be.equal('someurl');
    });
});
