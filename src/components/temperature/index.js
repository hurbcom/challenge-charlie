/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { toggle } from '../../store/slices/unitSlices';

function Temperature({ temperature }) {
    const unit = useSelector((state) => state.unit.value);
    const dispatch = useDispatch();

    function handleClick() {
        dispatch(toggle());
    }
    function handleKey(event) {
        if (event.code === 'Enter' || event.code === 'Space') {
            dispatch(toggle());
        }
    }

    return (
        <div id="temperature" role="button" tabIndex="0" onClick={handleClick} onKeyUp={handleKey}>
            <p>
                {temperature[unit]}
                &deg;
                {unit === 'celsius' ? 'C' : 'F'}
            </p>
        </div>
    );
}

Temperature.propTypes = {
    temperature: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default Temperature;
