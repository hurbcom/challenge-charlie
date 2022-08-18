import * as React from 'react';

import { LocationContextPayload } from './types';

export const LocationContext = React.createContext({} as LocationContextPayload);

export const LocationProvider = LocationContext.Provider;
