import React from "react";
import Header from "./Header";
import MainInfo from "./MainInfo";
import DayPlusOne from "./DayPlusOne";
import DayPlusTwo from "./DayPlusTwo";

const MainCard = () => {
    return (
        <div className="main_card--container">
            <Header />
            <MainInfo />
            <DayPlusOne />
            <DayPlusTwo />
        </div>
    );
};

export default MainCard;
