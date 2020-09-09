module.exports = {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    moduleNameMapper: {
        "\\.(css|scss)$": "identity-obj-proxy",
    },
    testRegex: "(/__tests__/.*|(\\.|/)(test))\\.[jt]sx?$",
};
