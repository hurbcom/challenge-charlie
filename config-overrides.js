const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
    
    config = rewireLess.withLoaderOptions({
            javascriptEnabled: true,
    })(config, env);
    
    return config;
};