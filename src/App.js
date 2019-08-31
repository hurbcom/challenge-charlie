import React from 'react';

//Styles imports
import { GlobalStyle } from './styles/global';
import { Wrapper, Container } from './styles/app';

//Page imports
import Home from './pages/home';

function App() {
  return (
    <Wrapper>
      <Container>
        <Home />
      </Container>
      <GlobalStyle />
    </Wrapper>
  );
}

export default App;
