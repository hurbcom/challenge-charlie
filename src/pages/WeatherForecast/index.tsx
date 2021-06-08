import React from 'react';

import {
    Container,
    BoxContent,
    SearchContainer,
    TodayContainer,
    AfterTomorrow,
    TomorrowInfo,
    IconContainer,
    TodayInfo,
} from './styles';

const WeatherForecast: React.FC = () => {
    return (
        <Container>
            <BoxContent>
                <SearchContainer>Input</SearchContainer>
                <TodayContainer>
                    <IconContainer>
                        <span>icone</span>
                    </IconContainer>
                    <TodayInfo>
                        <div>
                            <span>HOJE</span>
                            <span>32º</span>
                        </div>

                        <span>Ensolarado</span>
                        <div>
                            <p>Vento: NO 6.4km/h</p>
                            <p>Humidade: NO 6.4km/h</p>
                            <p>Pressão: NO 6.4km/h</p>
                        </div>
                    </TodayInfo>
                </TodayContainer>
                <TomorrowInfo>
                    <div>
                        <p>AMANHÃ</p>
                        <p>32º</p>
                    </div>
                </TomorrowInfo>
                <AfterTomorrow>
                    <div>
                        <p>DEPOIS DE AMANHÃ</p>
                        <p>32º</p>
                    </div>
                </AfterTomorrow>
            </BoxContent>
        </Container>
    );
};

export default WeatherForecast;
