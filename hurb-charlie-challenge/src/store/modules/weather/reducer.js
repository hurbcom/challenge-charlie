import produce from 'immer';

const INITIAL_STATE = {
    weather: null
};

export default function weather(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case '@weather/REQUEST':
                break;
            case '@weather/SUCESS':
                draft.data = action.payload;
                break;
            case '@weather/FAILURE':
                break;
            case '@weather/CHANGE_TEMPERATURE_REQUEST':
                break;
            case '@weather/CHANGE_TEMPERATURE_SUCESS':
                draft.data.weatherData.list[0].main.temp =
                    action.payload.temperature.today;
                draft.data.weatherData.list[8].main.temp =
                    action.payload.temperature.nextDay;
                draft.data.weatherData.list[16].main.temp =
                    action.payload.temperature.nextNextDay;
                break;
            case '@weather/UPDATE':
                break;
            default:
        }
    });
}
