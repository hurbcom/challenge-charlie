import { createLogger } from 'redux-logger';
import { env } from 'helper';


const { NODE_ENV } = env;
const Logger = createLogger({
  predicate: () => NODE_ENV === 'development',
});


export default Logger;
