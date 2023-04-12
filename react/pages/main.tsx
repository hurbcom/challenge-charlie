import React from "react";
import LocationInput from "@components/LocationInput";
import HeroImage from "@components/HeroImage";
import { WeatherData } from "@interfaces/WeatherData";
import WeatherInfo from "@components/WeatherInfo";
import Accordeon from "@components/Accordeon";

export default () => {
    const weatherData = [
        {
            day: "HOJE",
            weather: {
                icon: "B",
                description: "nublado",
            },
            main: {
                temp: 14,
                pressure: 1014,
                humidity: 73,
            },
            wind: {
                speed: 2.97,
                deg: 130,
            },
        },
        {
            day: "AMANHÃ",
            weather: {
                icon: "B",
                description: "nublado",
            },
            main: {
                temp: 22,
                pressure: 1014,
                humidity: 73,
            },
            wind: {
                speed: 2.97,
                deg: 130,
            },
        },
        {
            day: "DEPOIS DE AMANHÃ",
            weather: {
                icon: "B",
                description: "nublado",
            },
            main: {
                temp: 36,
                pressure: 1014,
                humidity: 73,
            },
            wind: {
                speed: 2.97,
                deg: 130,
            },
        },
    ];
    return (
        <HeroImage
            image={
                "https://www.bing.com/th?id=OHR.KitsAspen_PT-BR8299899730_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp"
            }
        >
            <LocationInput />
            <Accordeon
                tabDataArray={weatherData}
                renderTab={(data: WeatherData, { isOpen, index }) => (
                    <WeatherInfo {...data} isOpen={isOpen} position={index} />
                )}
            />
        </HeroImage>
    );
};
