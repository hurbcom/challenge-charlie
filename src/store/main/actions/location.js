export function updateLocation(location) {
  return {
    type: '@location/UPDATE_LOCATION',
    payload: { location },
  };
}
