import React from 'react';
import * as S from './styles';
// imagem mockada para testar o componente
import sunset from '../../assets/img/sunset.jpg';

type MainProps = {
    children: React.ReactNode;
};

const Main = ({ children }: MainProps) => {
    return <S.Container bgImage={sunset}>{children}</S.Container>;
};

export default Main;
