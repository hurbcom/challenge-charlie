import React from "react";
import { useWeather } from "../../providers/weather";
import styles from "./styles.module.scss";
import sun from "./sun.svg";

const WeatherInfo: React.FC = () => {
    const { weather } = useWeather();
    if(!weather) return <></>

    const { today, tomorrow, afterTomorrow } = weather

    return (
        <div className={`${styles.weatherInfo}`}>
            <div className={`${styles.todayWeather} ${styles.weatherBlock} ${today.bgColor}`}>
                <img src={sun} alt="" />
                <div>
                    <p className={styles.day}>Hoje</p>
                    <p>{today.temp}ºC</p>
                    <h1 className={styles.title}>{today.description}</h1>

                    <p className={styles.details}>Vento: {today.wind.direction} {today.wind.speed}km/h</p>
                    <p className={styles.details}>Humidade: {today.humidity}%</p>
                    <p className={styles.details}>Pressão: {today.pressure}hPA</p>
                </div>
            </div>
            <div className={`${styles.tomorrowWeather} ${styles.weatherBlock} ${today.bgColor}`}>
                <div>
                    <p className={styles.day}>AMANHÃ</p>
                    <p>{tomorrow.temp}ºC</p>
                </div>
            </div>
            <div className={`${styles.afterTomorrowWeather} ${styles.weatherBlock} ${today.bgColor}`}>
                <div>
                    <p className={styles.day}>DEPOIS DE AMANHÃ</p>
                    <p>{afterTomorrow.temp}ºC</p>
                </div>
            </div>
        </div>
    );
};

export default WeatherInfo;
