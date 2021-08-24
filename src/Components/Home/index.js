import React from "react";
import Background from "../Background";
import Weather from "../Weather";
import Container from "../Container";

const Home = (props) => {
    return (
        <React.Fragment>
            <Background>
                <Container>
                    <Weather />
                </Container>
            </Background>
        </React.Fragment>
    );
};

export default Home;
