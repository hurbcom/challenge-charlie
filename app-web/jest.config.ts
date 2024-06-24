module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/node_modules/@testing-library/jest-dom'],
    moduleNameMapper: {
        '\\.svg$': '<rootDir>/src/__mocks__/imgMock.ts',
        '^styled-components$': '<rootDir>/src/__mocks__/styledMock.ts',
        "\\.(css|less|scss|sass)$": '<rootDir>/src/__mocks__/cssMock.ts',
    }
};
