import React, { FC, memo } from 'react';
import styled from 'styled-components';

const Main = styled.div`
  width: 100%;
  border-radius: 0px;
  overflow: hidden;

  @media only screen and (min-width: 768px) {
    width: 600px;
    border-radius: 8px;
  }
`;

interface Props {
  children: React.ReactNode;
}

const Card: FC<Props> = ({ children }) => {
  return <Main>{children}</Main>;
};

export default memo(Card);
