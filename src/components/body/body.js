import React from 'react';
import style from './style.less';

const Body = (city, ...props) => {
    const getWeather = async () => {
        await fetch('http://api.openweathermap.org/data/2.5/weather?q='+ city.city +'&APPID=7ba73e0eb8efe773ed08bfd0627f07b8').then(res => res.json())
        .then((data) => {
            return data;
        });
    };

  return (
  
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
    

  </div>)
};

export default Body;