import React, { useEffect } from 'react'
import WheatherService from '../services/WheatherService'
import GeoService from '../services/GeoService'
import ImageService from '../services/ImageService'
import './styles/main.sass'

function Home({location}) {
    
    const fetchWheather = async ({latitude, longitude}) => {
        const {results} = await new GeoService().getLocation(latitude, longitude)
        await new WheatherService().getWheather(results[0].components.city)
        const image = await new ImageService().getImage()
        console.log(image)
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
