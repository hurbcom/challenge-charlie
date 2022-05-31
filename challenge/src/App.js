import React, { useState,useEffect } from 'react';

import Search from './Search/Search';
import Content from './Content/Content';


export default function App (){

// Área dos states
const [ bingWallpaper, setBingWallpaper] = useState();
const [ userLocation, setUserLocation ] = useState({});


// Pegando o papel de parede do bing (alo alo CORS!)
useEffect(() => {
  let getWallpaper = async () => {
    const allOriginsUrl = 'http://api.allorigins.win/get?url=';
    const bingUrl = 'https://www.bing.com';
    const fullUrl = allOriginsUrl + encodeURIComponent(bingUrl + '/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR');
  
    try{
        fetch(fullUrl)
            .then(res => res.json())
            .then(data => JSON.parse(data.contents))
            .then(info => setBingWallpaper(bingUrl + info.images[0].url));
    }catch{
        throw new Error('Not able to load wallpaper');
    }
  }

  getWallpaper();
  
}, []) 


// Pegando as coordenadas da localização atual do usuário.
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((userPosition) => {
        const lat = userPosition.coords.latitude
        const lng = userPosition.coords.longitude
      getCurrentLocation(lat,lng)
    },
    (err) => console.log(err))
  },[])

  console.log(userLocation);
  // Transformando as coordenadas do usuário em uma localizaçao, de fato.
    let getCurrentLocation = (lat, lng) => {

      fetch(`https://api.opencagedata.com/geocode/v1/json?q=
              ${lat}+${lng}&key=${process.env.REACT_APP_OPEN_CAGE}`)
        .then(res => res.json())
        .then(info => {
          setUserLocation({
            city: info.results[0].components.city, 
            suburb: info.results[0].components.suburb,
            state: info.results[0].components.state,
            country: info.results[0].components.county
        })
    })
        .catch(err => console.log(err))
  }


  return (
    <div className="container" style={{backgroundImage: `url(${bingWallpaper})`}}>
      <div className="main__container">
          <Search />
          <Content />
      </div>
    </div>
  )
}
