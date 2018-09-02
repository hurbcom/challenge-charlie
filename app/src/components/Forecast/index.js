import React from 'react';
import './index.css';

const Forecast = props => {
    return (
        <div>
            <div className="tomorrow">
                <h3>Amanhã</h3>
                {props.tomorrow}{' '}
                <span
                    className={
                        'unit ' +
                        (props.units.temperature === 'C'
                            ? 'celsius-unit'
                            : 'fahrenheit-unit')
                    }
                />
            </div>
            <div className="after-tomorrow">
                <h3>Depois de Amanhã</h3>
                {props.afterTomorrow}{' '}
                <span
                    className={
                        'unit ' +
                        (props.units.temperature === 'C'
                            ? 'celsius-unit'
                            : 'fahrenheit-unit')
                    }
                />
            </div>
        </div>
    );
};

export default Forecast;
