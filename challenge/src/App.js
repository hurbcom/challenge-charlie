import React from 'react';
import Icon from './download.png'
import Bussola from './download (1).png'

export default function App (){

  const BackgroundImage = {
    backgroundImage: `url(https://bing.com/th?id=OHR.PurnululuNP_PT-BR3234973741_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp)`
  }

  return (
    <div className="container" style={BackgroundImage}>
      <div className="main__container">
          <section className="search__container">
              <img className="search__icon" src={Bussola}/>
              <input type="text" placeholder="Rio de Janeiro, Rio de Janeiro"/>
          </section>
          <section className="content__container">
              <div className="forecast__subcontainer">
                  <div className="forecast__icon"> 
                      <img src={Icon}/>
                  </div>
                  <div className="forecast__data">  
                      <h3>HOJE</h3>
                      <ul>
                          <li>32°C</li>
                          <li>ENSOLARADO</li>
                          <li>Vento: NO 6.4km/h</li>
                          <li>Humidade: 78%</li>
                          <li>Pressão: 1003hPA</li>
                      </ul>
                  </div>
              </div>
              <div className="forecast__subcontainer">
                  <div className="forecast__data">
                      <h3>AMANHÃ</h3>
                      <p>25°C</p>
                  </div>
              </div>
              <div className="forecast__subcontainer">
                  <div className="forecast__data">
                      <h3>DEPOIS DE AMANHÃ</h3>
                      <p>25°C</p>
                  </div>
              </div>
          </section>
      </div>
    </div>
  )
}
