import "@testing-library/jest-dom";

// console.log = () => {}; //silence, i'll kill ya
console.error = () => {};

const mockEvent = {
    coords: {
        accuracy: "test",
        altitude: "test",
        altitudeAccuracy: "test",
        heading: "test",
        latitude: "test",
        longitude: "test",
        speed: "test",
        timestamp: "test",
    },
};

const mockGeolocation = {
    getCurrentPosition: jest.fn(
        (
            _fn: (e: any) => void,
            _fnE: (e: any) => void,
            _options: Record<string, unknown>
        ) => {
            _fn(mockEvent);
        }
    ),
};
if(global.navigator) {
    // will need to ignore this line or TS complain that geolocation is read-only
    // @ts-ignore
    global.navigator.geolocation = mockGeolocation;
}
