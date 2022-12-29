import { useCityName } from "App";
import queryClient from "controllers/queryClient";
import { getFirstDayInfo } from "modules/getFirstDayInfo";

function debugTemperature({ today, tomorrow, afterTomorrow, icon }) {
  const cityName = useCityName.getState().cityName;
  const data = JSON.parse(
    JSON.stringify(queryClient.getQueryData(["openWeather", cityName]))
  );
  data[1].data.list = getFirstDayInfo(data[1].data.list).slice(0, 2);
  if (today !== undefined) data[0].data.main.temp = today;
  if (tomorrow !== undefined) data[1].data.list[0].main.temp = tomorrow;
  if (afterTomorrow !== undefined)
    data[1].data.list[1].main.temp = afterTomorrow;
  if (icon !== undefined) data[0].data.weather[0].icon = icon;
  queryClient.setQueryData(["openWeather", cityName], data);
}

// if(process.env.NODE_ENV === 'development') {
window.debugTemperature = debugTemperature;
// }
