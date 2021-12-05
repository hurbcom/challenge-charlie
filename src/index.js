import React, { useEffect } from "react";

const App = () => {

  const fetchData = async (lat, long) => {
    const key = 'c63386b4f77e46de817bdf94f552cddf'
    let content;

    try {
      const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${lat}+${long}&key=${key}`)

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      } else {
        content = await response.json()
      }

      return content
    } catch (e) {
      return null
    }
  };

  useEffect(() => {
    fetchData('-3.7634893', '-38.4922015').then(res => console.log(res))
  }, []);

  return (
    <div>
      <p>Bem-vindo!</p>
    </div>
  );
};

export default App;