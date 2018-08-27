import React from 'react';
import classnames from 'classnames';

const Meteocons = ({ code }) => (
    <div className={classnames('Meteocons', `Meteocons--${code}`)}>
        {code}
    </div>
);

export default Meteocons;
