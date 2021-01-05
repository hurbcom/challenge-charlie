module.exports = {
	roots: ['<rootDir>/src'],
	testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.js?$',
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	setupFilesAfterEnv: ['<rootDir>/src/setupEnzyme.js'],
	transformIgnorePatterns: ['/node_modules/(?!weather-icons-react)'],
	moduleNameMapper: {
		'\\.(css|less)$': 'identity-obj-proxy'
	}
};
