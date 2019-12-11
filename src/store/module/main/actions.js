export function addBackground(background) {
  return {
    type: '@background/ADD_BACKGROUND',
    payload: { background },
  };
}

export function updateUnit(unit) {
  return {
    type: '@unit/UPDATE_UNIT',
    payload: { unit },
  };
}

export function updateIsOpened(isOpened) {
  return {
    type: '@opened/UPDATE_OPENED',
    payload: { isOpened },
  };
}

export function updateBrazilStates(brazilStates) {
  return {
    type: '@brazilStates/UPDATE_BRAZIL_STATES',
    payload: { brazilStates },
  };
}

export function updateLocation(location) {
  return {
    type: '@location/UPDATE_LOCATION',
    payload: { location },
  };
}

export function updateSelectedValue(selectedValue) {
  return {
    type: '@selectedValue/UPDATE_SELECTED_VALUE',
    payload: { selectedValue },
  };
}

export function updateWeather(weather) {
  return {
    type: '@weather/UPDATE_WEATHER',
    payload: { weather },
  };
}
