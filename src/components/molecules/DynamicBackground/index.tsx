import React, { FC, memo } from 'react';
import styled from 'styled-components';

const S = {
  Container: styled.div`
    height: 100vh;
    width: 100vw;
    background: ${({ theme }) => theme.secondaryColor};
  `,
};

interface Props {
  children: React.ReactNode;
}

const DynamicBackground: FC<Props> = ({ children }) => {
  return <S.Container>{children}</S.Container>;
};

export default memo(DynamicBackground);
