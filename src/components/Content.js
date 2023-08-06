import React, { useMemo } from 'react';
import getNextThreeDays from '../utils/getNextThreeDays';
import filterForecastData from '../utils/filterForecastData';

const Content = (props) => {
  const { data } = props;

  const forecastData = useMemo(() => {
    const todayFullDate = data?.list[0]?.dt_txt;
    const filteredDays = data?.list.filter((element) => {
      const nextThreeDays = getNextThreeDays(todayFullDate);
      return nextThreeDays.includes(element.dt_txt);
    });
    const formattedForecast = filterForecastData(filteredDays);

    console.log(formattedForecast);
    return formattedForecast;
  }, [data]);

  return (
    <>
      <div className={'forecastContainer'}>{}</div>
    </>
  );
};
export default Content;
