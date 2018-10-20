import { UI } from 'store/constants';


// ====================================================================
// Typed actions
// ====================================================================

export const loadingWeather = () => ({
  type: UI.LOADING_WEATHER,
});

export const undefinedWeather = () => ({
  type: UI.UNDEFINED_WEATHER,
});
