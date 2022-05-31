import React from "react";
import './style.css'
import Bussola from '../download (1).png'

export default function Search (props){

const locationRecieved= props.curCity && props.curState ? 
                        props.curCity + ', ' + props.curState:
                        'Carregando..';

    return (
        <section className="search__container">
            <img className="search__icon" src={Bussola}/>
            <input type="text" placeholder={locationRecieved}/>
        </section>
    )
}