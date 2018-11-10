
import * as constants from '../constants/suggestion';
import * as weatherApi from '../api/yahoo/weatherApi';
import * as ramda from 'ramda';

const getSuggestionSuccess = (suggestion = '') =>
  ({ type: constants.SUGGESTION_FETCH_SUCCESS, suggestion });

const getSuggestionFail = () =>
  ({ type: constants.SUGGESTION_FETCH_FAIL });

export const getSuggestion = (location = '') => {
  return(dispatch) => {
    return weatherApi.getWeatherByLocation(location).then(response => {
        const locationSuggestion = ramda.path(
            ['query', 'results', 'channel', 'location'], response);
        if (locationSuggestion) {
            const { city, region, country } = locationSuggestion;
            const name = city + ',' + region + ' - ' + country;
            return dispatch(getSuggestionSuccess(name));
        }
        return dispatch(getSuggestionFail());
    }).catch(err => {
        return dispatch(getSuggestionFail());
    })
  }
}