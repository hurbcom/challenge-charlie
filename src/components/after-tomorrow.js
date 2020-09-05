import React from 'react'

function AfterTomorrow({ forecast }) {

    return (
        <div>
            {forecast && forecast.celcius}
        </div>
    )
}

export default AfterTomorrow
