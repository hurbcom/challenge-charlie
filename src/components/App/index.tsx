import React, { FC } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../theme';
import { Card, Center } from 'atoms';
import { DynamicBackground, Search, Stages } from 'molecules';

const Styles = {
  Header: styled.div`
    display: flex;
  `,
  Body: styled.div``,
};

const App: FC = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <DynamicBackground>
        <Center>
          <Card>
            <Styles.Header>
              <Search />
            </Styles.Header>
            <Styles.Body>
              <Stages />
            </Styles.Body>
          </Card>
        </Center>
      </DynamicBackground>
    </ThemeProvider>
  );
};

export default App;
