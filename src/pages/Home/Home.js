import React from 'react';
import { FaRegCompass, FaRegSun } from 'react-icons/fa';

const Home = () => {
  const [bgImg, setBgImg] = React.useState();

  React.useEffect(() => {
    const headers = {
      "Access-Control-Allow-Origin": "*",
      'Content-Type': 'application/json'
    }

    fetch('https://cors-anywhere.herokuapp.com/https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR')
      .then(res => res.json())
      .then(data => {
        console.log('data', data)
        setBgImg(`https://www.bing.com${data.images[0].url}`)
      }).catch(err => console.log('err', err))

  }, []);

  return (
    <div className="background" style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="d-flex flex-center h-100">
        <div className="card">
          <div className="card-title">
            <p><FaRegCompass /> Rio de Janeiro, Rio de Janeiro</p>
          </div>
          <div className="card-content">
            <div style={{ backgroundColor: 'rgba(246, 181, 59, 0.6)' }} className="d-flex fl-d-row align-i-center">
              <div className="weather-icon">
                <FaRegSun size="5em" title="sun" />
              </div>
              <div className="weather-info">
                <div style={{ marginBottom: '20px' }}>
                  <h4 style={{ textTransform: 'uppercase' }}>Hoje</h4>
                  <p>32ºC</p>
                </div>
                <div>
                  <h4 style={{ marginBottom: '5px' }}>Ensolarado</h4>
                  <p>Vento: NO 6.4km/h</p>
                  <p>Humidade: 78%</p>
                  <p>Vento: 100 3hPA</p>
                </div>
              </div>
            </div>
            <div className="future-weather-info">
              <div style={{ backgroundColor: 'rgba(255, 247, 0, 0.6)' }} >
                <h4 className="future-weather-day">Amanhã</h4>
                <p>25ºC</p>
              </div>
              <div style={{ backgroundColor: 'rgba(255, 0, 0, 0.6)' }}>
                <h4 className="future-weather-day">Depois de Amanhã</h4>
                <p>25ºC</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default Home;
