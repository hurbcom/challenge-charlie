const path = require('path');

module.exports = {
	public: path.resolve(__dirname, '../src'), // source files
	build: path.resolve(__dirname, '../dist'), // production build files
	static: path.resolve(__dirname, '../static') // static files to copy to build folder
};
