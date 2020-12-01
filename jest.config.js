module.exports = {
    verbose: true,
    setupFilesAfterEnv: ["./setUpTests.js"],
    moduleFileExtensions: ["js", "jsx"],
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
            "<rootDir>/svgMock.js",
    },
};
