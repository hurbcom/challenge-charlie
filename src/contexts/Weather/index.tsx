import * as React from 'react';

import { WeatherContextPayload } from './types';

export const WeatherContext = React.createContext({} as WeatherContextPayload);

export const WeatherProvider = WeatherContext.Provider;
