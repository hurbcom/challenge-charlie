import React from "react";
import Background from "../Background";
import WeatherSearch from "../WeatherSearch";
import Container from "../Container";

const Home = (props) => {
    return (
        <>
            <Background>
                <Container>
                    <WeatherSearch />
                </Container>
            </Background>
        </>
    );
};

export default Home;
