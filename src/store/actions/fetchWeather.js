import * as actionTypes from './actionTypes';
// import axios from '../../axios-orders';
import axios from 'axios';

const openWeatherKey = '63f579b5964ac8e740baf76c46b58699';

    // 1 - Função para escolher a previsão dos cartões amanhã e depois de amanhã optando pelos horários sempre de meio dia.:

export const fetchWeather = (tim) => {
    const digitoDoDiaDeHoje = tim.data.list[0].dt_txt.charAt(9);
    const arraySemHoje = tim.data.list.filter(item => item.dt_txt.charAt(9) !== digitoDoDiaDeHoje)
    const arrayDeObjetosDePrevisaoNaHoraMeioDia = arraySemHoje.filter(filtrado => filtrado.dt_txt.charAt(12) === '2')
    const objeto0 = tim.data.list[0]
    const objeto1 = arrayDeObjetosDePrevisaoNaHoraMeioDia[0]
    const objeto2 = arrayDeObjetosDePrevisaoNaHoraMeioDia[1]
    return {
        type: actionTypes.FETCH_WEATHER,
        tim: {objeto0, objeto1, objeto2}
    }
}

export const finishedLoading = () => {
    return {
        type: actionTypes.FINISH_LOADING,
    }
}

export const getPlace = (place) => {
    return async dispatch => {
        try {
            let res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${place}&lang=pt_br&APPID=${openWeatherKey}&mode=json`)
            await dispatch(fetchWeather(res))
        } 
        catch (err) {
            
        }
        finally {
            dispatch(finishedLoading())
        }
    }
}

