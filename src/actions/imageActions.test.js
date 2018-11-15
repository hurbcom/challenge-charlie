import 'mocha';
import { expect } from 'chai';

import { getImageSuccess } from './imageActions.js';
import * as constants from '../constants/image.js';

describe('imageActions', () => {
    it('should dispatch correct action type', () => {
        const result = getImageSuccess('url');

        expect(result.type).to.be.equal(constants.IMAGE_FETCH_SUCCESS);
        expect(result.image).to.be.equal('url');
    });
});