import React, { useState } from 'react';
import '../App.css';


function Home() {
  const [city, setCity] = useState("");

  const onChangeCity = ({ target: { value: city } }) => {
    setCity(city);
  };

  const onSubmitCity = (event) => {
    setCity(city);
  };

  return (
    <div className="Home">
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
