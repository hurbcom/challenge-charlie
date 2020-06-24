import React from 'react';
import { Container, Background, Temperature, Form } from './Components';
import GlobalStyles from "./assets/styles/global";
import './assets/fonts/stylesheet.css';

const App = () => {
    return (
        <main>
            <GlobalStyles />            
            <Background>
                <Container>
                    <Form/>
                    <Temperature/>
                </Container>
            </Background>
        </main>
    )
}

export default App;