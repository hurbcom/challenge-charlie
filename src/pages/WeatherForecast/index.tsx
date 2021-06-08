import React from 'react';

import sun from '../../assets/clear_sky.png';
import {
    Container,
    BoxContent,
    SearchContainer,
    TodayContainer,
    AfterTomorrowInfo,
    TomorrowInfo,
    TodayOthersInfoContainer,
    TodayOthersInfo,
    TodayInfo,
} from './styles';

const WeatherForecast: React.FC = () => {
    return (
        <Container>
            <BoxContent>
                <SearchContainer>Input</SearchContainer>
                <TodayContainer>
                    <TodayInfo>
                        <h2>Porto Alegre</h2>
                        <h3>Hoje</h3>
                        <img src={sun} alt="" />
                        <h1>32º</h1>
                        <span>Ensolarado</span>
                    </TodayInfo>
                    <TodayOthersInfoContainer>
                        <TodayOthersInfo>
                            <img src={sun} alt="imagem" />
                            <div>
                                <b>Vento</b>
                                <p>NO 6.4km/h</p>
                            </div>
                        </TodayOthersInfo>
                        <TodayOthersInfo>
                            <img src={sun} alt="imagem" />
                            <div>
                                <b>Pressão</b>
                                <p>100%</p>
                            </div>
                        </TodayOthersInfo>
                        <TodayOthersInfo>
                            <img src={sun} alt="imagem" />
                            <div>
                                <b>Humidade</b>
                                <p>100%</p>
                            </div>
                        </TodayOthersInfo>
                    </TodayOthersInfoContainer>
                </TodayContainer>
                <TomorrowInfo>
                    <h3>Amanhã</h3>
                    <div>
                        <span>32º</span>
                        <img src={sun} alt="imagem" />
                    </div>
                </TomorrowInfo>
                <AfterTomorrowInfo>
                    <h3>Depois de Amanhã</h3>
                    <div>
                        <span>32º</span>
                        <img src={sun} alt="imagem" />
                    </div>
                </AfterTomorrowInfo>
            </BoxContent>
        </Container>
    );
};

export default WeatherForecast;
