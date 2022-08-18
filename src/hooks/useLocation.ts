import React from 'react';
import { LocationContext } from '../contexts/Location';
import { LocationContextPayload } from '../contexts/Location/types';

function useLocation(): LocationContextPayload {
  const context = React.useContext(LocationContext);

  if (!context) {
    throw new Error('useLocation should be within LocationProvider or LocationContainer');
  }

  return context;
}

export default useLocation;
