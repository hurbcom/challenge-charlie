import * as React from "react";
import componentFactory from "../../../utils/componentFactory";
import Segment from "../../atoms/Segment";
import styles from "./index.module.scss";
import Image from "next/image";
import TemperatureDay from "../../molecules/TemperatureDay";
import DetailsTemperature from "../../molecules/DetailsTemperature";

const Content = componentFactory<IContentProps>("Content", (props, ref) => {
  const { dataCurrent, dataForecast, text, variant, onClick } = props;
  const { afterTomorrow, tomorrow, today } = text;
  const {
    climate,
    climateFigure,
    dayDescription,
    humidity,
    maxTemperature,
    minTemperature,
    pressure,
    temperature,
    wind,
  } = dataCurrent;
  const {
    maxTemperatureAfterTomorrow,
    maxTemperatureTomorrow,
    minTemperatureAfterTomorrow,
    minTemperatureTomorrow,
    temperatureAfterTomorrow,
    temperatureTomorrow,
  } = dataForecast;  

  const style = styles[variant];

  return (
    <main ref={ref} className={style}>
      <Segment className={styles.todayContainer}>
        <figure className={styles.FigureContainer}>
        <span className={styles.WheatherFigure}>
          <Image
            src={climateFigure}
            alt="currentyWheatherFigure"
            layout="responsive"
            objectFit="cover"
            width={250}
            height={250}
          />
        </span>
        </figure>
        <TemperatureDay
        className={styles.detailsToday}
          onClick={onClick}
          dayDescription={today}
          temperature={temperature}
          maxTemperature={maxTemperature}
          minTemperature={minTemperature}
        >
          <DetailsTemperature
            climate={climate}
            humidity={humidity}
            pressure={pressure}
            wind={wind}
          />
        </TemperatureDay>
      </Segment>
      <Segment className={styles.tomorrowContainer}>
        <TemperatureDay
          onClick={onClick}
          dayDescription={tomorrow}
          temperature={temperatureTomorrow}
          minTemperature={minTemperatureTomorrow}
          maxTemperature={maxTemperatureTomorrow}
        />
      </Segment>
      <Segment className={styles.afterTomorrowContainer}>
        <TemperatureDay
          onClick={onClick}
          dayDescription={afterTomorrow}
          temperature={temperatureAfterTomorrow}
          minTemperature={minTemperatureAfterTomorrow}
          maxTemperature={maxTemperatureAfterTomorrow}
        />
      </Segment>
    </main>
  );
});

export default Content;
