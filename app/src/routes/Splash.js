import React, { useEffect } from 'react'
import loading from '../statics/images/loading.svg'
import './styles/main.sass'

function Splash({history}) {

    useEffect(() => {
        setTimeout(() => history.push('/home'), 2000)
    })

    return (
        <div className="splash-container">
            <img className="loading" alt="carregando" src={loading}/>
        </div>
    )
}

export default Splash
