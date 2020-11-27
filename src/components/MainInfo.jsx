import React from "react";
import Sun from '../icons/2.svg';

function MainInfo() {
    return (
        <div className="main_info_container">
            <Sun />
            <div className="main_info_container--data_info">
                <div className="main_info_container--data_info--today_temp">
                    <h2>HOJE</h2>
                    <h2>32°</h2>
                </div>

                <h2>Ensolarado</h2>
                <div className="main_info_container--data_info--others_info">
                    <h3>Vento: NO 6.4km/h</h3>
                    <h3>Humidade: 78%</h3>
                    <h3>Pressão: 1003hPA</h3>
                </div>
            </div>
        </div>
    );
}

export default MainInfo;
