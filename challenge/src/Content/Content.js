import React from "react";
import './style.css'
import Icon from '../download.png'

export default function Content (props){
    return (
        <section className="content__container">
            <div className="forecast__subcontainer">
                <div className="forecast__icon"> 
                    <img src={Icon}/>
                </div>
                <div className="forecast__data">  
                    <h3>HOJE</h3>
                    <ul>
                        <li>32°C</li>
                        <li>ENSOLARADO</li>
                        <li>Vento: NO 6.4km/h</li>
                        <li>Humidade: 78%</li>
                        <li>Pressão: 1003hPA</li>
                    </ul>
                </div>
            </div>
            <div className="forecast__subcontainer">
                <div className="forecast__data">
                    <h3>AMANHÃ</h3>
                    <p>25°C</p>
                </div>
            </div>
            <div className="forecast__subcontainer">
                <div className="forecast__data">
                    <h3>DEPOIS DE AMANHÃ</h3>
                    <p>25°C</p>
                </div>
            </div>
        </section>
    )
}