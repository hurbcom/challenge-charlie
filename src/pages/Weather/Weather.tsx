import React from "react";
import SearchLocation from "../../components/SearchLocation/SearchLocation";
import WeatherInfo from "../../components/WeatherInfo/WeatherInfo";
import styles from "./styles.module.scss";

const WeatherPage: React.FC = () => {
    return (
        <div className={styles.container} >
            <SearchLocation />
            <WeatherInfo />
        </div>
    );
};

export default WeatherPage;
