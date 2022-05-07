import React, { useEffect, useState } from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { toggle } from '../../../store/slices/unitSlices';

function Temperature({ temperature }) {
    const unit = useSelector((state) => state.unit.value);
    const dispatch = useDispatch();

    const [fahrenheit, setFahrenheit] = useState();

    useEffect(() => {
        setFahrenheit(temperature * (9 / 5) + 32);
    }, [temperature]);

    function handleClick() {
        dispatch(toggle());
    }
    function handleKey(event) {
        if (event.code === 'Enter' || event.code === 'Space') {
            dispatch(toggle());
        }
    }

    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            { temperature !== undefined && temperature !== null && (
            <span
              title={unit === 'celsius' ? 'Mudar temperatura para Fahrenheit' : 'Mudar temperatura para Celsius'}
              id="temperature"
              role="button"
              tabIndex="0"
              onClick={handleClick}
              onKeyUp={handleKey}
            >
                {unit === 'celsius' ? Math.round(temperature) : Math.round(fahrenheit)}
                &deg;
                {unit === 'celsius' ? 'C' : 'F'}
            </span>
            )}
        </>
    );
}

Temperature.propTypes = {
    temperature: PropTypes.number,
};
Temperature.defaultProps = {
    temperature: null,
};

export default Temperature;
