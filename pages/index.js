import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import BackgroundCover from '../src/components/BackgroundCover';
import BigBox from '../src/components/BigBox';
import Box from '../src/components/Box';
import BoxInfo from '../src/components/BoxInfo';
import Column from '../src/components/Column';
import FakeBody from '../src/components/FakeBody';
import Icon from '../src/components/Icon';

export default function Home() {
  const TOKENS = {
    location: 'c63386b4f77e46de817bdf94f552cddf'
  }
  const [loading, setLoading] = useState(true);
  const [coords, setCoords] = useState({latitude: '', longitude: ''});
  const [navigatorLocationAvailability, setNavigatorLocationAvailability] = useState(false);
  const [city, setCity] = useState('');
  const [background, setBackground] = useState();
  const fadedColor = '#cecece80'

  const getCity = (latitude, longitude, token) => {
    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${token}`)
    .then(serverResponse => serverResponse.json())
    .then((response) => {
      console.log(response);
      setCity(response.results[0].components.city);
    });
  }

  const getLocation = () => {
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
  }

  const getBingImage = async () => {
    const urlCORS = "https://api.allorigins.win/get?url=";
    const urlBing = "https://www.bing.com";
    const url = urlCORS + encodeURIComponent(urlBing + "/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR");
    setLoading(true);
    try {
      const serverResponse = await fetch(url);
      const dados = await serverResponse.json();
      const JSONdata = JSON.parse(dados.contents);
      const imageUrl = urlBing + JSONdata.images[0].url;
      setBackground(imageUrl);
    } catch {
      console.log('erro')
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getLocation();
    getBingImage();
  }, []);

  useEffect(() => {
    if(!!coords.latitude && !!coords.longitude){
      getCity(coords.latitude, coords.longitude, TOKENS.location);

      setLoading(false);
    }
  }, [coords]);
  
  return(
    <>
    {
      !loading &&
      !!background &&
      <FakeBody style={{ 
        background: `url(${background}) no-repeat`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}>
        {
          !!coords &&
          !!navigatorLocationAvailability &&
          !!city &&
          <BackgroundCover style={{ background: `${fadedColor}` }}>
            <Column>
            <BigBox>
              <Icon name="compass" styles={{fontSize: '48px'}}/>
              <BoxInfo />
            </BigBox>
            <Box>
              <Icon />
              <BoxInfo />
            </Box>
            <Box>
              <Icon />
              <BoxInfo />
            </Box>
            </Column>
          </BackgroundCover>
        }
      </FakeBody>
    }
    </>
  )
}
