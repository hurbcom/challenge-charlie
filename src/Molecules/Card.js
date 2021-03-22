import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Meters from '../Atons/Meters';
import { ThemeContext } from '../Molecules/ThemeContext'
import BoxTemp from './BoxTemp';
import CityInfo from './CityInfo';
import Status from './Status';

function Card() {
    const { theme, temp, tempCards} = useContext(ThemeContext);

    return (
        <div className={`card theme--${theme}`}>
            <div className="card__wrapper">
               <CityInfo/>
                <div className="card__content-info">
                    <div className="card__icon"></div>
                    <div className="card__text-box">
                        <div className="card__today">
                            <span className="card__today-info">Hoje </span>
                            <Meters
                                temp={temp}
                            />
                        </div>
                        <Status/>
                    </div>
                </div>
                <BoxTemp
                    setClass='tomorrow'
                    status="amanhã"
                    temp={tempCards.amanha}
                />
                <BoxTemp
                    setClass='after'
                    status="depois de amanhã"
                    temp={tempCards.depois}
                />
            </div>

        </div>
    )
}

Card.propTypes = {
    ThemeContext: PropTypes.shape({
        theme: PropTypes.string,
        temp: PropTypes.string,
        whitchUnit: PropTypes.string,
        tempCards: PropTypes.object,
        
    })
}

export default Card;
