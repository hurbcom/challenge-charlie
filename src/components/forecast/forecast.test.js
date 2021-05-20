
import { render, screen, queryByAttribute  } from '@testing-library/react';
import Forecast from  './index'
import Describe from '../weather/describe.json';

const __MOCK__ = {
            "city": "Rio de Janeiro",
            "days": {
                "today": {
                    "dt": 1621368760,
                    "sunrise": 1621329611,
                    "sunset": 1621369116,
                    "temp": 23.05,
                    "feels_like": 23.19,
                    "pressure": 1015,
                    "humidity": 68,
                    "dew_point": 16.83,
                    "uvi": 0,
                    "clouds": 75,
                    "visibility": 10000,
                    "wind_speed": 4.63,
                    "wind_deg": 200,
                    "weather": [
                        {
                            "id": 803,
                            "main": "Clouds",
                            "description": "nuvens quebradas",
                            "icon": "04d"
                        }
                    ],
                    "description": "nuvens quebradas"
                },
                "tomorrow": {
                    "weather": [
                        {
                            "id": 803,
                            "main": "Clouds",
                            "description": "nuvens quebradas",
                            "icon": "04d"
                        }
                    ],
                    "wind_speed": 3.09,
                    "humidity": 63,
                    "temp": 23.31,
                    "description": "nuvens quebradas"
                },
                "after_tomorrow": {
                    "weather": [
                        {
                            "id": 800,
                            "main": "Clear",
                            "description": "céu limpo",
                            "icon": "01d"
                        }
                    ],
                    "wind_speed": 3.33,
                    "humidity": 64,
                    "temp": 24.14,
                    "description": "céu limpo"
                }
            }
        }
test('Testando o comportamento mínimo para tela', () => {
    const props = { unit: null, data:__MOCK__,  day: "today" };
    let dataToday = props.data.days[props.day];
    let describe = Describe.weather.days[props.day];
    const { container } = render(<Forecast key={'day'} unit={props.unit || ""} day={props.day} data={dataToday} {...describe} />);
   
    if(describe.config.showIcon) {
        const icon = container.querySelector("[data='icon']");
        expect(icon.textContent).toEqual(" H ");
    }
    
    const labelToday = container.querySelector("[data='" + describe.config.name + "']");
    expect(labelToday.textContent).toEqual(" " + describe.config.name + " ");
    
    const labelTemperature = container.querySelector("[data='temperature']");
    expect(labelTemperature.textContent).toEqual(" 23°C ");
});

