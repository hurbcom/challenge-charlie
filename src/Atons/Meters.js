import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../Molecules/ThemeContext'

function Meters({ temp }) {
    const { ChangeMeters, whitchUnit } = useContext(ThemeContext);
    
    return (
        <div className="meters">
            <span className="meters__box-info">{Math.ceil(temp)}
                <span className={`meters__unit meters__unit--${whitchUnit}`} onClick={() => ChangeMeters()}>
                    <span className="meters__celsius"> °C</span> | <span className="meters__fahrenheit" >°F</span>
                </span>
            </span>
        </div>
    )
}

Meters.propTypes = {
    theme: PropTypes.number,
}

export default Meters;
