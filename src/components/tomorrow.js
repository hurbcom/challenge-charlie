import React from 'react'

function Tomorrow({ forecast }) {

    return (
        <div>
            {forecast && forecast.celcius}
        </div>
    )
}

export default Tomorrow
