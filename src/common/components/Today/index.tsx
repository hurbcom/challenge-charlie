import { useRecoilValue } from "recoil";
import { weatherState } from "../../../store/atoms";
import { Container, Data, DataContainer, IconWrapper, Label, Line, Weather, Wrapper } from "./style";

export const Today = () => {
  const weather = useRecoilValue(weatherState);

  const variants = {
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: "-10vh" },
  };

  return (
    <Wrapper>
      <Container
        transition={{
          bounce: false,
        }}
        animate={!!weather ? "in" : "out"}
        variants={variants}
        temperature={weather?.temperature}
      >
        {weather && (
          <>
            <IconWrapper weather={weather.weatherType} />
            <DataContainer>
              <Line>
                <Label>HOJE</Label>
              </Line>

              <Line>
                <Data>{weather.temperature.toFixed(0)}°C</Data>
              </Line>

              <Weather>{weather.weather}</Weather>

              <Line>
                <Label>Vento: </Label> <Data>{weather.wind.toString().replace(".", ",")} m/s</Data>
              </Line>

              <Line>
                <Label>Humidade: </Label> <Data>{weather.humidity}%</Data>
              </Line>

              <Line>
                <Label>Pressão: </Label> <Data>{weather.pressure} hPa</Data>
              </Line>
            </DataContainer>
          </>
        )}
      </Container>
    </Wrapper>
  );
};
