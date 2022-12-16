import styles from './frontend-weather-forecast-framework-ui.module.css';

/* eslint-disable-next-line */
export interface FrontendWeatherForecastFrameworkUiProps {}

export function FrontendWeatherForecastFrameworkUi(
  props: FrontendWeatherForecastFrameworkUiProps
) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FrontendWeatherForecastFrameworkUi!</h1>
    </div>
  );
}

export default FrontendWeatherForecastFrameworkUi;
