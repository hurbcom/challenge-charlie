import React, { FC } from 'react';
import { Toaster } from 'react-hot-toast';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../../theme';
import { Card, Center } from 'atoms';
import { LocationContainer, WeatherContainer } from 'contexts';
import { DynamicBackground, Search, Stages } from 'molecules';
import { ErrorBoundary } from 'organisms';

const Styles = {
  Header: styled.div`
    display: flex;
    background-color: #fff;
    height: 80px;
    padding: 0 18px;
  `,
  Body: styled.div``,
  Footer: styled.div`
    background-color: #fff;
    height: 20px;
  `,
};

const App: FC = () => {
  return (
    <ErrorBoundary>
      <ThemeProvider theme={lightTheme}>
        <LocationContainer>
          <WeatherContainer>
            <DynamicBackground>
              <Center>
                <Card>
                  <Styles.Header>
                    <Search />
                  </Styles.Header>
                  <Styles.Body>
                    <Stages />
                  </Styles.Body>
                  <Styles.Footer />
                </Card>
              </Center>

              <Toaster />
            </DynamicBackground>
          </WeatherContainer>
        </LocationContainer>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;
