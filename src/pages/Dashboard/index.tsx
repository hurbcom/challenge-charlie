import React from 'react';

import bingAPI from '../../services/bingAPI';

import {
    Container,
    Content,
    Location,
    Days,
    Today,
    Tomorrow,
    AfterTomorrow,
    Weather,
} from './styles';

const Dashboard: React.FC = () => {
    return (
        <Container>
            <Content>
                <Location>
                    <i className="icon-compass"></i>

                    <p>Estado,</p>
                    <p>Cidade</p>
                </Location>

                <Days>
                    <Today celcius={22}>
                        <i className="icon-sun"></i>

                        <Weather>
                            <time>Hoje</time>
                            <span>22 C</span>

                            <p>Ensolarado</p>

                            <div>
                                <p>Vento:</p>
                                <p>Humidade:</p>
                                <p>Pressão:</p>
                            </div>
                        </Weather>
                    </Today>

                    <Tomorrow celcius={22}>
                        <Weather>
                            <time>Amanhã</time>
                            <span>22 C</span>
                        </Weather>
                    </Tomorrow>

                    <AfterTomorrow celcius={22}>
                        <Weather>
                            <time>Depois de Amanhã</time>
                            <span>22 C</span>
                        </Weather>
                    </AfterTomorrow>
                </Days>
            </Content>
        </Container>
    );
};

export default Dashboard;