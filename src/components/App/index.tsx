import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../theme';
import Card from '../atoms/Card';
import Center from '../atoms/Center';
import DynamicBackground from '../molecules/DynamicBackground';

const Main: FC = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <DynamicBackground>
        <Center>
          <Card>Hi</Card>
        </Center>
      </DynamicBackground>
    </ThemeProvider>
  );
};

export default Main;
