import { useStoreState } from 'easy-peasy';
import React from 'react';
import { getColorFromTemperature } from '../../utils/functions';
import Temperature from '../temperature/temperature';
import './dailyForecast.scss';

function DailyForecast({ index }) {
    const { weatherData, loading } = useStoreState((state) => state);

    const temperature = weatherData?.main?.temp;
    const dailyData = weatherData?.daily && weatherData.daily[index];
    const color = getColorFromTemperature(temperature, !!dailyData)[index + 1];

    return (
        <div className="temp-container" style={{ backgroundColor: color }}>
            <div className="daily">{index === 0 ? 'Amanhã' : 'Depois de Amanhã'}</div>
            { dailyData && !loading && (
                <div className="container-max-min">
                    <div className="max">
                    <span className="material-symbols-outlined ">
                        arrow_upward
                    </span>
                    <Temperature temperature={dailyData?.temp?.max} />
                    </div>

                    <div className="min">
                    <span className="material-symbols-outlined ">
                        arrow_downward
                    </span>
                    <Temperature temperature={dailyData?.temp?.min} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default DailyForecast;