import React from "react";
import styles from "./styles.module.scss";
import sun from "./sun.svg";

const WeatherInfo: React.FC = () => {
    return (
        <div className={`${styles.weatherInfo}`}>
            <div className={`${styles.todayWeather} ${styles.weatherBlock}`}>
                <img width={32} src={sun} alt="" />
                <div>
                    <p className={styles.day}>Hoje</p>
                    <p>32*C</p>
                    <h1 className={styles.title}>Ensolarado</h1>

                    <p className={styles.details}>Vento: NO 6.4km/h</p>
                    <p className={styles.details}>Humidade: 78%</p>
                    <p className={styles.details}>Pressão: 100 3hPA</p>
                </div>
            </div>
            <div className={`${styles.tomorrowWeather} ${styles.weatherBlock}`}>
                <div>
                    <p className={styles.day}>AMANHÃ</p>
                    <p>25*C</p>
                </div>
            </div>
            <div className={`${styles.afterTomorrowWeather} ${styles.weatherBlock}`}>
                <div>
                    <p className={styles.day}>DEPOIS DE AMANHÃ</p>
                    <p>22*C</p>
                </div>
            </div>
        </div>
    );
};

export default WeatherInfo;
