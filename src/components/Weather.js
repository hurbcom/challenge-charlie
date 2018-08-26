import React from 'react';

const Weather = ({ results }) => (
    <section className="Weather">
        <div className="Weather__today">
            <div className="Weather__today__condition">
                <div className="Weather__today__condition__code">
                    {results.channel.item.condition.code}
                </div>
                <p className="Weather__today__condition__text">
                    {results.channel.item.condition.text}
                </p>
            </div>
            <div className="Weather__today__info">
                <p>Hoje</p>
                <p>{results.channel.item.condition.temp}</p>
                <ul>
                    <li>vento: {results.channel.wind.speed}</li>
                    <li>
                        humidade:{' '}
                        {results.channel.atmosphere.humidity}
                    </li>
                    <li>
                        pressao: {results.channel.atmosphere.pressure}
                    </li>
                </ul>
            </div>
        </div>
        <div className="Wheater__brief">
            <p>Amanhã</p>
            <p>Min: {results.channel.item.forecast[1].low}</p>
            <p>Max: {results.channel.item.forecast[1].high}</p>
        </div>
        <div className="Wheater__brief">
            <p>Depois de Amanhã</p>
            <p>Min: {results.channel.item.forecast[2].low}</p>
            <p>Max: {results.channel.item.forecast[2].high}</p>
        </div>
    </section>
);

export default Weather;
