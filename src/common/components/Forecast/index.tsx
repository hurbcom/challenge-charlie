import { useRecoilValue } from "recoil";
import { weatherState } from "../../../store/atoms";
import { BigLegend, Container, Data, Group, Legend, Temperature, Wrapper } from "./style";

interface ForecastProps {
  isPostTomorrow?: boolean;
}

export const Forecast = ({ isPostTomorrow }: ForecastProps) => {
  const weather = useRecoilValue(weatherState);

  const variants = {
    in: {
      opacity: 1,
      y: 0,
      transition: {
        delay: isPostTomorrow ? 0.2 : 0.1,
      },
    },
    out: {
      opacity: 0,
      y: "-10vh",
      transition: {
        delay: 0,
      },
    },
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
        isPostTomorrow={isPostTomorrow}
      >
        {weather && (
          <>
            <Group>
              <BigLegend>{isPostTomorrow ? "Depois de amanhã" : "Amanhã"}</BigLegend>
            </Group>

            <Group>
              <Temperature>
                <Legend>Máximo</Legend>
                <Data>{weather.forecast[isPostTomorrow ? 1 : 0].max.toFixed(0)}°C</Data>
              </Temperature>
            </Group>

            <Group>
              <Temperature>
                <Legend>Mínimo</Legend>
                <Data>{weather.forecast[isPostTomorrow ? 1 : 0].min.toFixed(0)}°C</Data>
              </Temperature>
            </Group>
          </>
        )}
      </Container>
    </Wrapper>
  );
};
