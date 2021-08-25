import React from "react";
import Background from "../Background";
import WeatherSearch from "../WeatherSearch";
import Container from "../Container";

const Home = (props) => {
    return (
        <React.Fragment>
            <Background>
                <Container>
                    <WeatherSearch />
                </Container>
            </Background>
        </React.Fragment>
    );
};

export default Home;
