import styled from "styled-components";
import perdizes from "public/perdizes.jpeg";
import { useState } from "react";
import { GlobalStyle } from "./styles/global";

const IconDict = {
    "01d": "B",
    "02d": "H",
    "03d": "N",
    "04d": "Y",
    "09d": "R",
    "10d": "Q",
    "11d": "0",
    "13d": "V",
    "50d": "M",
    "01n": "C",
    "02n": "I",
    "03n": "N",
    "04n": "Y",
    "09n": "R",
    "10n": "Q",
    "11n": "0",
    "13n": "V",
    "50n": "M",
};

const BackgroundWithImage = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    background-image: url(${(props) => props.image});
    background-size: cover;
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100vh;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.5);
`;

const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 2;
    height: 100vh;
`;

const HeroImage = ({ image, children }) => {
    return (
        <BackgroundWithImage image={image}>
            <Overlay />
            <Content>{children}</Content>
        </BackgroundWithImage>
    );
};

const Tab = styled.div`
    width: 100%;
    height: ${({ open }) => (open ? "17rem" : "5rem")};
    padding: 0 4rem 0 2rem;
    padding-top: ${({ open }) => (open ? "1rem" : ".5rem")};

    overflow: hidden;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;

    color: white;
    transition: height 500ms;
    i {
        visibility: ${({ open }) => (open ? "show" : "hidden")};
    }
    background-color: ${({ open, number }) => {
        if (!open && number === 2) {
            return "rgb(110, 110, 14)";
        }

        return open ? "rgba(255, 255, 0, 0.4)" : "rgba(255, 255, 0, 1)";
    }};
`;

const WeatherTab = ({ open, number, onClick }) => {
    return (
        <Tab open={open} number={number} onClick={onClick}>
            <div style={{ marginRight: "2rem" }}>
                <i data-icon="B" style={{ fontSize: "15rem" }}></i>
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <div>
                    <p style={{ marginBottom: ".35rem" }}>HOJE</p>
                    <p style={{ fontSize: "1.4rem" }}>32ºC</p>
                </div>
                <h1 style={{ fontSize: "1.5rem", margin: "1.30rem 0" }}>
                    Ensolarado
                </h1>
                <div style={{ lineHeight: "1.5rem" }}>
                    <p>Vento: NO 6.4km/h</p>
                    <p>Umidade: 78%</p>
                    <p>Pressão 1003hPA</p>
                </div>
            </div>
        </Tab>
    );
};

const Input = styled.input`
    /* background-color: rgba(255, 255, 255, 0.7); */
    font-size: 2rem;
    font-weight: 600;
    border: none;
    outline: none;
    padding: 1.5rem;
    box-shadow: 0px 3px 20px -9px rgba(51, 51, 51, 1);
    color: #666;
    position: relative;
    width: 100%;
    padding-left: 5rem;
    opacity: 0.8;
`;

const InputWrapper = styled.span`
    position: relative;
    display: inline-block;
    height: auto;
    overflow: hidden;
    ::before {
        height: 100%;
        left: 1rem;
        position: absolute;
        top: 1rem;
        width: 2em;
        font-size: 3rem;
        z-index: 3;
    }
`;

const LocationInput = () => {
    return (
        <InputWrapper data-icon="(">
            <Input type="text" name="location" id="location" />
        </InputWrapper>
    );
};

const WidgetBody = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
`;

const WeatherWidget = () => {
    const [tabOpen, setTabOpen] = useState(0);
    return (
        <WidgetBody>
            <LocationInput />
            <>
                <WeatherTab
                    number={0}
                    open={tabOpen == 0}
                    onClick={() => setTabOpen(0)}
                />
                <WeatherTab
                    number={1}
                    open={tabOpen == 1}
                    onClick={() => setTabOpen(1)}
                />
                <WeatherTab
                    number={2}
                    open={tabOpen == 2}
                    onClick={() => setTabOpen(2)}
                />
            </>
        </WidgetBody>
    );
};

export default () => {
    return (
        <>
            <GlobalStyle />
            <HeroImage image={perdizes}>
                <WeatherWidget />
            </HeroImage>
        </>
    );
};
