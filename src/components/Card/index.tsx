import styles from "./styles.module.scss";

interface Temperature {
  celsius?: number;
  fahrenheit?: number;
}

interface Today {
  temperature?: Temperature;
  condition?: string;
  wind?: number;
  humidity?: number;
  pressure?: number;
  icon?: string;
}

interface CardProps {
  today?: Today;
  toggleCelsius: boolean;
  toggleFahrenheit: boolean;
  changeTemperatureUnit: () => void;
}

const changeBackgroundColorByCelsius = (celsius: number): string => {
  if (celsius <= 5) {
    return styles.darkBlue;
  } else if (celsius <= 10) {
    return styles.mediumBlue;
  } else if (celsius <= 15) {
    return styles.lightBlue;
  } else if (celsius <= 20) {
    return styles.lightYellow;
  } else if (celsius <= 25) {
    return styles.mediumYellow;
  } else if (celsius < 35) {
    return styles.darkYellow;
  } else if (celsius <= 40) {
    return styles.lightRed;
  } else if (celsius <= 45) {
    return styles.mediumRed;
  } else {
    return styles.darkRed;
  }
};

const Card = ({
  today,
  toggleCelsius,
  toggleFahrenheit,
  changeTemperatureUnit,
}: CardProps) => {
  return (
    <div
      className={`${styles.cardContainer} ${
        today?.temperature?.celsius
          ? changeBackgroundColorByCelsius(today.temperature.celsius)
          : styles.gray
      }`}
      onClick={changeTemperatureUnit}
    >
      {today?.temperature?.celsius && (
        <>
          <img
            src={`/${today.icon}.svg`}
            alt="Weather condition"
            width="165"
            height="165"
          />
          <main>
            <div>
              <strong>HOJE</strong>
              {toggleCelsius && <p>{today.temperature.celsius}° C</p>}
              {toggleFahrenheit && <p>{today.temperature.fahrenheit}° F</p>}
            </div>
            <strong>{today.condition}</strong>
            <div>
              <p>Vento: {today.wind}km/h</p>
              <p>Humidade: {today.humidity}%</p>
              <p>Pressão: {today.pressure}hPA</p>
            </div>
          </main>
        </>
      )}
    </div>
  );
};

export default Card;
