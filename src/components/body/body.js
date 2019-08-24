import React from "react";
import style from "./style.less";
import { getWeather } from "../../api/weather";

const Body = (city, ...props) => {
    if(city){
        console.log(getWeather(city));
    }    
    return (
        <div className={style.layout}>
            <div className={style.container}>
                <div className={style.firstHalf}>
                    <p data-icon="B" />
                </div>
                <div className={style.secondHalf}>
                    <h3 className={style.heading}>Hoje</h3>
                    <p className={style.text}> 32ºC</p>
                    <h3 className={style.heading}>Ensolarado</h3>
                    <p className={style.text}>Vento: NO 6.4km/h</p>
                    <p className={style.text}>Humidade: 78%</p>
                    <p className={style.text}>Pressão: 1003hPA</p>
                </div>
            </div>
            <div className={style.secondContainer}>
                <div className={style.firstHalf} />
                <div className={style.secondHalf}>
                    <h3 className={style.heading}>Amanhã</h3>
                    <p className={style.text}> 25ºC</p>
                </div>
            </div>
            <div className={style.thirdContainer}>
                <div className={style.firstHalf} />
                <div className={style.secondHalf}>
                    <h3 className={style.heading}>Depois de amanhã</h3>
                    <p className={style.text}> 22ºC</p>
                </div>
            </div>
        </div>
    );
};

export default Body;
