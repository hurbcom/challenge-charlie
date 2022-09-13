import React, { FC } from 'react';
import { Toaster } from 'react-hot-toast';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../../theme';
import { Card, Center } from 'atoms';
import { LocationContainer, WeatherContainer } from 'contexts';
import { DynamicBackground, Search, Stages } from 'molecules';
import { ErrorBoundary } from 'organisms';

const Styles = {
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
                  <header className='flex bg-white px-4 h-20'>
                    <Search />
                  </header>
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
