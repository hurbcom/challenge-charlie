import React, { useMemo } from 'react';
import getNextThreeDays from '../utils/getNextThreeDays';
import filterForecastData from '../utils/filterForecastData';
import WeatherForecastContainer from './WeatherForecastContainer';

const Content = (props) => {
  const { data } = props;

  const forecastData = useMemo(() => {
    const todayFullDate = data?.list[0]?.dt_txt;
    const filteredDays = data?.list.filter((element) => {
      const nextThreeDays = getNextThreeDays(todayFullDate);
      return nextThreeDays.includes(element.dt_txt);
    });
    const formattedForecast = filterForecastData(filteredDays);

    return formattedForecast;
  }, [data]);

  return (
    <>
      <div className={'forecastContainer'}>
        <WeatherForecastContainer forecast={forecastData} />
      </div>
    </>
  );
};
export default Content;
