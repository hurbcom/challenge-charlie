import React from "react";
import './style.css'
import Bussola from '../download (1).png'

export default function Search (){
    return (
        <section className="search__container">
            <img className="search__icon" src={Bussola}/>
            <input type="text" placeholder="Rio de Janeiro, Rio de Janeiro"/>
        </section>
    )
}