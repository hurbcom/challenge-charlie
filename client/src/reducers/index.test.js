import rootReducer from './index';
describe('rootReducer', () => {
    it('should initializes the default store', () => {
        expect(rootReducer({}, {})).toEqual({ weather: { bkgImg: {}, city: {}, loading: true } });
    });
});
