// import changeBackgroundColorByCelsius from "../../utils/changeBackgroundColorByCelsius";
import styles from "./styles.module.scss";

interface Temperature {
  celsius: number;
  fahrenheit: number;
}

interface SubCardProps {
  label: string;
  temperature: Temperature;
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

const SubCard = ({
  label,
  temperature,
  toggleCelsius,
  toggleFahrenheit,
  changeTemperatureUnit,
}: SubCardProps) => {
  return (
    <div
      className={`${styles.subCardContainer} ${
        temperature?.celsius
          ? changeBackgroundColorByCelsius(temperature.celsius)
          : styles.gray
      }`}
      onClick={changeTemperatureUnit}
    >
      {temperature && (
        <main>
          <strong>{label}</strong>
          {toggleCelsius && <p>{temperature.celsius}° C</p>}
          {toggleFahrenheit && <p>{temperature.fahrenheit}° F</p>}
        </main>
      )}
    </div>
  );
};

export default SubCard;
