import styled from "styled-components";
import Text from "@components/Text";

//Let's just leave this guy right here because it's not generic enough to go to utils
const getTemperatureColor = (temperature) => {
    const roundedTemp = Math.round(temperature);
    // I'll stick with the browser default "yellow", "red", and "blue" colors given that the specs don't mention a specific color.
    if (roundedTemp <= 15) {
        return "blue";
    }

    if (roundedTemp >= 35) {
        return "red";
    }

    return "yellow";
};

const WeatherIcon = styled.div`
    margin-right: 2rem;
    font-size: 15rem;
    ::before {
        content: "${({ icon }) => icon}";
        font-family: "MeteoconsRegular";
    }
`;

const TabOverlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 1;
    z-index: 2;
    top: 0;
    left: 0;
    background-color: ${({ bg }) => (bg ? bg : "grey")};
`;

const TabContent = styled.div`
    position: relative;
    z-index: 3;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
`;

const Tab = styled.div`
    width: 100%;
    /* I dont like to use magic numbers such as '17rem' but in this case we need to set a height because of the transition */
    height: ${({ open }) => (open ? "17rem" : "5rem")};
    padding: 0 4rem 0 2rem;
    padding-top: ${({ open }) => (open ? "1rem" : ".5rem")};
    position: relative;

    overflow: hidden;
    color: white;
    transition: height 500ms;

    ${Text} {
        line-height: 1.75rem;
    }

    ${WeatherIcon} {
        visibility: ${({ open }) => (open ? "show" : "hidden")};
    }

    :first-child ${TabOverlay} {
        opacity: 0.5;
    }

    :nth-child(2) ${TabOverlay} {
        opacity: 0.7;
    }
`;

export default ({ open, onClick, weatherData }) => {
    const background = getTemperatureColor(weatherData.main.temp);
    return (
        <Tab open={open} onClick={onClick}>
            <TabOverlay bg={background} />
            <TabContent>
                <WeatherIcon icon={weatherData.weather.icon} />
                <div>
                    <Text m="0 0 .35rem 0">{weatherData.day}</Text>
                    <Text size="1.4rem">{weatherData.main.temp}°C</Text>
                    <Text m="1.30rem 0" size="1.5rem" capitalize>
                        {weatherData.weather.description}
                    </Text>
                    <div>
                        <Text>
                            Vento: {weatherData.wind.deg}{" "}
                            {weatherData.wind.speed}
                        </Text>
                        <Text>Umidade: {weatherData.main.humidity}%</Text>
                        <Text>Pressão {weatherData.main.pressure}hPA</Text>
                    </div>
                </div>
            </TabContent>
        </Tab>
    );
};
