interface IMountedData {
  lon?: number;
  lat?: number;
  main: string;
  temp: number;
  max_temp: number;
  min_temp: number;
  humidity: number;
  cityName: string;
  country: string;
  image: string;
  max_temp_tomorrow: number;
  min_temp_tomorrow: number;
  main_tomorrow: string;
  max_temp_atomorrow: number;
  min_temp_atomorrow: number;
  main_atomorrow: string;
}

export default IMountedData;
