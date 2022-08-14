import React, { FC, memo } from 'react';
import styled from 'styled-components';

const Main = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface CenterProps {
  children: React.ReactNode;
}

const Center: FC<CenterProps> = ({ children }) => {
  return <Main>{children}</Main>;
};

export default memo(Center);
