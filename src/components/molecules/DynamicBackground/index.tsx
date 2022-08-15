import React, { FC, memo } from 'react';
import styled from 'styled-components';

const S = {
  Container: styled.div`
    height: 100vh;
    width: 100vw;
    background-color: ${({ theme }) => theme.secondaryColor};
    background-image: url('https://www.bing.com/th?id=OHR.Cassowary_PT-BR4044547706_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp');
  `,
};

interface Props {
  children: React.ReactNode;
}

const DynamicBackground: FC<Props> = ({ children }) => {
  return <S.Container>{children}</S.Container>;
};

export default memo(DynamicBackground);
