import React from 'react'

function Today({ forecast }) {

    return (
        <div>
            {forecast && forecast.celcius}
        </div>
    )
}

export default Today
