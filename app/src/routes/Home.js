import React, { useEffect, useState } from 'react'
import WheatherService from '../services/WheatherService'
import GeoService from '../services/GeoService'
import './styles/main.sass'

function Home({location}) {
    
    const fetchWheather = async ({latitude, longitude}) => {
        const {results} = await new GeoService().getLocation(latitude, longitude)
        const wheather = await new WheatherService().getWheather(results[0].components.city)
    }

    useEffect(() => {
        fetchWheather(location.state)
    })

    return (
        <div className="container-home">
            home
        </div>
    )
}

export default Home
