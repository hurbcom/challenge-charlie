import React from 'react';
import { FiSun } from 'react-icons/fi';
import * as S from './styled';

const WeatherStatus = () => {
    return (
        <S.WeatherHolder>
            <S.Grid>
                <S.IconWrapper bgColor="#ffd717" opacity="70%">
                    <FiSun color="#fff" size="80%" />
                </S.IconWrapper>
                <S.statusWrapper>
                    <S.Text fontSize="1.5rem" padding="8px 0 3px 0">
                        HOJE
                    </S.Text>
                    <S.Text fontSize="1.5rem" fontFamily="'Open Sans'">
                        32ºC
                    </S.Text>
                    <S.Text fontSize="1.8rem" padding="16px 0 10px 0">
                        Ensolarado
                    </S.Text>
                    <S.Text fontSize="1.2rem">Vento: NO 6.4Km/h</S.Text>
                    <S.Text fontSize="1.2rem">Humidade: 78%</S.Text>
                    <S.Text fontSize="1.2rem">Pressão: 1003hPA</S.Text>
                </S.statusWrapper>
                <S.IconWrapper bgColor="#facc05" opacity="90%" />
                <S.TomorrowWrapper>
                    <S.Text fontSize="1.5rem" padding="8px 0 3px 0">
                        AMANHÃ
                    </S.Text>
                    <S.Text fontSize="1.5rem" fontFamily="'Open Sans'">
                        25ºC
                    </S.Text>
                </S.TomorrowWrapper>
                <S.IconWrapper bgColor="#b89503" />
                <S.AfterTomorrowWrapper>
                    <S.Text fontSize="1.5rem" padding="8px 0 3px 0">
                        DEPOIS DE AMANHÃ
                    </S.Text>
                    <S.Text fontSize="1.5rem" fontFamily="'Open Sans'">
                        22ºC
                    </S.Text>
                </S.AfterTomorrowWrapper>
            </S.Grid>
        </S.WeatherHolder>
    );
};

export default WeatherStatus;
