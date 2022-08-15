import React, { FC } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../theme';
import Card from '../atoms/Card';
import Center from '../atoms/Center';
import DynamicBackground from '../molecules/DynamicBackground';
import Search from '../molecules/Search';

const Styles = {
  Header: styled.div`
    display: flex;
  `,
};

const Main: FC = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <DynamicBackground>
        <Center>
          <Card>
            <Styles.Header>
              <Search />
            </Styles.Header>
          </Card>
        </Center>
      </DynamicBackground>
    </ThemeProvider>
  );
};

export default Main;
