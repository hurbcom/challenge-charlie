import React, { useState, useEffect } from 'react';
import axios from "axios";
import '../Home.css';


const API_BASE_URL='http://localhost:3001'

function Home() {
  const [city, setCity] = useState("");
  const [backgroundUrl, setBackgroundUrl] = useState("");
  const onChangeCity = ({ target: { value: city } }) => {
    setCity(city);
  };

  const onSubmitCity = (event) => {
    setCity(city);
  };

  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type'
  };

  useEffect(() => {
    axios.get(API_BASE_URL + '/background', {headers, mode: 'cors'}).then(
      (res) => setBackgroundUrl(res.data)
    );
  }, []);

  return (
    <div className="Home" style={{backgroundImage: `url(${backgroundUrl})`}}>
      <header className="Home-header">
      </header>
      <div className="Home-body">
        <input name="city" type="text" value={city} onChange={onChangeCity} onSubmit={onSubmitCity} />
      </div>
      <footer className="Home-footer">
      </footer>
    </div>
  );
}

export default Home;
