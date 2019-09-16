import reducer from './fetchWeather';
import * as actionTypes from '../actions/actionTypes';

describe('reducer de busca de clima do OpenWeather', () => {
    it('deve retornar o state inicial', () => {
        expect(reducer(undefined, {})).toEqual({
            tim: null,
            endOfLoading: true,
        });
    });

    it('não está retornando a igualdade esperada', () => {
        expect(reducer({
            tim: null,
            endOfLoading: true,
        }, { 
            type: actionTypes.FETCH_WEATHER,
            tim: 'foo',
         })).toEqual({
            tim: 'foo',
            endOfLoading: true,
        });
    })
});
