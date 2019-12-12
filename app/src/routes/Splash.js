import React, { useEffect } from 'react'
import loading from '../statics/images/loading.svg'
import './styles/main.sass'

function Splash({ history }) {

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(handlePosition);
        } else {
            alert('Parece que a Geolocalização, que é necessária para esta página, não está ativada no seu navegador.');
        }
    })

    const handlePosition = ({coords}) => {
        const { latitude, longitude } = coords

        history.push({
            pathname: '/home',
            state: {
                latitude,
                longitude
            }
        })
      }

    return (
        <div className="container-loading">
            <div>
                <img className="loading" alt="carregando" src={loading} />
                <p>Enable your location</p>
            </div>
        </div>
    )
}

export default Splash
