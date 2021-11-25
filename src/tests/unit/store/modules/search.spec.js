import 'regenerator-runtime/runtime';
import search from '@/store/modules/search';

let url = '';
let mockError = false;
const commit = jest.fn();

jest.mock('axios', () => ({
    get: (_url) => {
        return new Promise((resolve) => {
          if (mockError)
            throw Error()

          url = _url
          resolve(true)
        })
    }
}));

describe('Store modules/search', () => {
    test('validating a', () => {
        expect('a').toEqual('a');
    });
});