const {
  NODE_ENV = 'development',
  REACT_APP_CHALLANGE_BRAVO_API_BING_TIMEOUT = 1000,
} = process.env;


export default {
  ...process.env,
  NODE_ENV,
  REACT_APP_CHALLANGE_BRAVO_API_BING_TIMEOUT,
};
