import React from 'react';
import PropTypes from 'prop-types';
import Meters from '../Atons/Meters'

function BoxTemp({temp, setClass, status}) {
    return (
     
    <div className={`boxTemp boxTemp--${setClass}`}>
        <div className="boxTemp__wrapper">
            <span className="boxTemp__box-info">{status} </span>
           <Meters
                temp={temp}
           />
        </div>
    </div>
    )
}
BoxTemp.propTypes = {
    temp: PropTypes.number,
    setClass: PropTypes.string,
    status: PropTypes.string,
  };

export default BoxTemp;
