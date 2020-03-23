import React, { useState } from 'react';

import { Container } from './styles';

import Locationinput from '../../components/LocationInput';
import WeatherDetails from '../../components/WeatherDetails';
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
    console.tron.log(backgroundBingImg);

    return (
        <Container background={backgroundBingImg}>
            <Locationinput />
            <WeatherDetails />
            <WeatherMinDetails />
        </Container>
    );
}
