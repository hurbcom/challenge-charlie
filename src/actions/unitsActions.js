
import * as constants from '../constants/unit';

export const changeTemperatureUnitSuccess = (unit = 'F') =>
  ({ type: constants.CHANGE_TEMPERATURE_UNIT, unit });

export const changeTemperatureUnit = (unit = 'F') => {
  return(dispatch) => {
      dispatch(changeTemperatureUnitSuccess(unit))
  }
}