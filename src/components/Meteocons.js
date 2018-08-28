import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Meteocons = ({ code, size }) => (
    <div
        className={classnames(
            'Meteocons',
            size === 'small' && `Meteocons--small`,
            `Meteocons--${code}`
        )}
    >
        {code}
    </div>
);

Meteocons.defaultProp = {
    size: null,
};

Meteocons.propTypes = {
    code: PropTypes.string.isRequired,
    size: PropTypes.string,
};

export default Meteocons;
