import styled from 'styled-components';
import React, { useState, useEffect } from 'react';

const FakeBody = styled.div`
  width: 100vh;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export default function Home() {
  const TOKENS = {
    location: 'c63386b4f77e46de817bdf94f552cddf'
  }
  const [loading, setLoading] = useState(true);
  const [coords, setCoords] = useState({latitude: '', longitude: ''});
  const [navigatorLocationAvailability, setNavigatorLocationAvailability] = useState(false);
  const [city, setCity] = useState('');

  useEffect(() => {
    if ("geolocation" in navigator) {
      setNavigatorLocationAvailability(true);
      
      navigator.geolocation.getCurrentPosition((position) => {
        setCoords({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
      }, (error) => {
        setNavigatorLocationAvailability(false);
        console.error(error);
      });
    } else {
      setNavigatorLocationAvailability(false);
    }
  }, []);

  useEffect(() => {
    if(!!coords.longitude && !!coords.latitude){
      fetch(`https://api.opencagedata.com/geocode/v1/json?q=${coords.latitude}+${coords.longitude}&key=${TOKENS.location}`)
      .then(serverResponse => serverResponse.json())
      .then((response) => {
        setCity(response.results[0].components.city);
      });

      setLoading(false);
    }
  }, [coords])
  
  return(
    <FakeBody>
      {
        !loading &&
        !!coords &&
        !!navigatorLocationAvailability &&
        !!city &&
        <>
          <p>{city}</p>
        </>
      }
    </FakeBody>
  )
}
