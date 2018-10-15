const {
  NODE_ENV = 'development',
} = process.env;


export default {
  ...process.env,
  NODE_ENV,
};
