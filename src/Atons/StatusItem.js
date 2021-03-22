import React from 'react';
import PropTypes from 'prop-types';

function StatusItem({ classInfo, type, name, unit, info }) {
    return (
        <>
            {
                classInfo ?
                    <span className={`status__${classInfo}`}>{name || ''} {type || info} {unit || ''} </span>
                    : null
            }
        </>
    )
}

StatusItem.propTypes = {
    classInfo: PropTypes.string,
    name: PropTypes.string,
    info: PropTypes.string,
    type: PropTypes.number,
    unit: PropTypes.string,
}

export default StatusItem;
