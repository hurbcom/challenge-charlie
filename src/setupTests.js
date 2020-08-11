// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';


const mockGeolocation = {
    getCurrentPosition: callback => {
        return callback({
            coords: {
                latitude: -23.0126811,
                longitude: -43.454839
            }
        });
    }
};

global.navigator.geolocation = mockGeolocation;