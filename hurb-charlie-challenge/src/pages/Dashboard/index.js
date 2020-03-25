import React, { useState } from 'react';

import { Container } from './styles';

import Locationinput from '../../components/locationInput';
import WeatherDetails from '../../components/weatherDetails';
import WeatherMinDetails from '../../components/WeatherMinDetails';
import bingApi from '../../services/bingApi';

export default function Dashboard() {
    const [backgroundBingImg, setbackgroundBingImg] = useState('');

    async function getBingImgOfDay() {
        const response = await bingApi.get(
            '/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR'
        );
        const imgUrl = response.data.images[0].url;
        const responseImgURL = `url(https://www.bing.com/${imgUrl})`;
        setbackgroundBingImg(responseImgURL);
    }

    getBingImgOfDay();
    return (
        <Container background={backgroundBingImg}>
            <Locationinput />
            <WeatherDetails />
            <WeatherMinDetails />
        </Container>
    );
}
