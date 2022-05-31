import React, { useState,useEffect } from 'react';

import Search from './Search/Search';
import Content from './Content/Content';


export default function App (){

// Área dos states
const [ bingWallpaper, setBingWallpaper] = useState();

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

  return (
    <div className="container" style={{backgroundImage: `url(${bingWallpaper})`}}>
      <div className="main__container">
          <Search />
          <Content />
      </div>
    </div>
  )
}
