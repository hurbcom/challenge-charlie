import React from 'react';
// Asset(s)
import ClodyImg from '../assets/images/cloudy.png';
import MoonImg from '../assets/images/moon.png';
import SunnyImg from '../assets/images/sunny.png';
import ThunderImg from '../assets/images/thunder.png';

import { ArrowDownSvg, ArrowUpSvg } from '../assets/images/Svgs';

const WeatherCity = ({ cityWeather, index, tempFormatted, convertTemp }) => {
    const { day, city } = cityWeather;
    // Function to convert the temperature
    const convertTemperature = temp => {
        if (tempFormatted) {
            return Math.floor((parseInt(temp) - 32) * 0.5556);
        }
        return Math.floor(parseInt(temp) * 1.8 + 32);
    };
    // Function to verify and choose the class based on the temperature
    const changeColorByTemp = temp => {
        if (Math.floor((parseInt(temp) - 32) * 0.5556) < 15) return 'weather-box__days--blue';
        if (Math.floor((parseInt(temp) - 32) * 0.5556) > 35) return 'weather-box__days--red';
        return 'weather-box__days--yellow';
    };
    // Function to choose which Img of the sky will be rendered
    const renderImgBySky = sky => {
        if (sky === 'Sunny' || sky === 'Mostly Sunny') {
            return SunnyImg;
        } else if (sky === 'Mostly Cloud' || sky === 'Partly Clody') {
            return ClodyImg;
        } else if (sky === 'Thunderstorms' || sky === 'Scattered Thunderstorms') {
            return ThunderImg;
        }
        return MoonImg;
    };
    // If index is 0, render the first card
    if (index === 0) {
        return (
            <div className={`weather-box__days ${changeColorByTemp(city.item.condition.temp)}`}>
                <div>
                    {index === 0 ? (
                        <a onClick={convertTemp} className="weather-box__day-1__btn">
                            <h1 className="heading-1">{convertTemperature(city.item.condition.temp)}˚</h1>
                            <span
                                className={`weather-box__day-1__temp ${
                                    !tempFormatted ? 'weather-box__day-1__temp--active' : ''
                                }`}
                            >
                                {tempFormatted ? 'C' : 'F'}
                            </span>
                        </a>
                    ) : null}
                </div>
                <div className={`weather-box__day-1`}>
                    <h5 className="heading-5">
                        {index === 0 ? 'Today' : index === 1 ? 'Tomorrow' : 'Day after tomorrow'}
                    </h5>
                    <div className="weather-box__day-1__group">
                        <img
                            src={renderImgBySky(city.item.condition.text)}
                            alt={`sky${index}`}
                            className="weather-box__img"
                        />
                        <h2 className="heading-3 ml-sm">{city.item.condition.text}</h2>
                    </div>
                    <div className="weather-box__day-1__group mb-sm">
                        <ArrowUpSvg className="weather-box__img--sm" />
                        <h3 className="heading-3">
                            {convertTemperature(day.high)}˚{tempFormatted ? 'C' : 'F'}
                        </h3>
                    </div>
                    <div className="weather-box__day-1__group">
                        <ArrowDownSvg className="weather-box__img--sm" />
                        <h3 className="heading-3">
                            {convertTemperature(day.low)}˚{tempFormatted ? 'C' : 'F'}
                        </h3>
                    </div>
                </div>
            </div>
        );
    }
    if (index > 0 && index < 3) {
        return (
            <div className={`weather-box__days ${changeColorByTemp(day.high)}`}>
                <h3 className="heading-3">{index === 1 ? 'Tomorrow' : day.day}</h3>
                <div className="weather-box__day-2">
                    <ArrowUpSvg />
                    <h3 className="heading-3">
                        {convertTemperature(day.high)}˚{tempFormatted ? 'C' : 'F'}
                    </h3>
                    <ArrowDownSvg />
                    <h3 className="heading-3">
                        {convertTemperature(day.low)}˚{tempFormatted ? 'C' : 'F'}
                    </h3>
                </div>
            </div>
        );
    }
};

export default WeatherCity;
