/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import { getDay, parseISO } from 'date-fns';

export default function formatWeather(datas) {
  return datas.filter((current, index, array) => {
    if (index !== 0) {
      const prevIndex = index - 1;
      const prevDate = getDay(parseISO(array[prevIndex].dt_txt));
      const date = getDay(parseISO(current.dt_txt));
      if (prevDate !== date) return current;
    } else {
      return current;
    }
  });
}
