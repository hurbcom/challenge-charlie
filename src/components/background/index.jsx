import React, { useEffect, useState } from "react";
import axios from "axios";
import './style.scss'

const Background = props => {
    const { children } = props
    
    const [backgroundURL, setBackgroundURL] = useState('')
    const getBackground = async () => {
        const url = process.env.BACKGROUND_JSON_URL
        const { data } = await axios.get(url)

        setBackgroundURL(`https://www.bing.com.br${data.images[0].url}`)
    }

    useEffect(() => {
        getBackground()
    })

    return (
        <div className="background-container">
            <div className="background-dark-layer"></div>
            <img style={{ backgroundImage: `url(${backgroundURL})` }} className="responsive" alt="" />
            <div className="background-content">
                {children}
            </div>
        </div>
    )
}

export default Background