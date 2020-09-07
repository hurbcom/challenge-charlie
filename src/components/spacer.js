import React from 'react'
import PropTypes from 'prop-types'

function Spacer({
    vertical,
    size
}) {
    return (
        <div
            style={{
                width: vertical ? 0 : size,
                height: vertical ? size : 0
            }}
        ></div>
    )
}

Spacer.propTypes = {
    vertical: PropTypes.bool,
    size: PropTypes.number,
}

Spacer.defaultProps = {
    vertical: false,
    size: 8
}

export default Spacer