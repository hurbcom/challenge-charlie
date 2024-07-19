import { useContext, useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";
import { type Weather } from "../../api/weather";
import Icon from "../../components/Icon";
import {
  IconSkeleton,
  WeatherDetailsSkeleton,
} from "../../components/Skeletons";
import {
  WeatherContext,
  WeatherContextType,
} from "../../contexts/WeatherProvider";
import { Colors, RGB } from "../../helpers/ColorsShadeDictonary";
import weatherIconDictonary from "../../helpers/WeatherIconDictonary";
import {
  ClickableSpan,
  Container,
  DetailsContainer,
  EmptyContainer,
  IconContainer,
  SubDetailsContainer,
} from "./styles";

type WeatherDetailsProps = {
  weather?: Weather;
  colors: Colors;
  description: string;
  showIcon: boolean;
  showDetails: boolean;
  isLoading: boolean;
};

const WeatherDetails = ({
  weather,
  colors,
  description,
  showIcon,
  showDetails,
  isLoading,
}: WeatherDetailsProps) => {
  const [actualColor, setActualColor] = useState<RGB>(colors.gray);

  const { unit, setUnit } = useContext(WeatherContext) as WeatherContextType;

  const unitHandler = () => {
    if (unit === "metric") setUnit("imperial");
    else setUnit("metric");
  };

  useEffect(() => {
    if (!weather) return setActualColor(colors.gray);

    let temp = weather.temp;
    let unit = weather.unit;

    if ((unit === "°C" && temp <= 15) || (unit === "°F" && temp <= 59))
      return setActualColor(colors.blue);
    else if ((unit === "°C" && temp >= 35) || (unit === "°F" && temp >= 95))
      return setActualColor(colors.red);
    else return setActualColor(colors.yellow);
  }, [weather]);

  return (
    <Container
      $red={actualColor.red}
      $green={actualColor.green}
      $blue={actualColor.blue}
      $hasMinHeight={showIcon}
    >
      {showIcon ? (
        <IconContainer>
          {isLoading ? (
            <IconSkeleton />
          ) : weather ? (
            <>
              <Icon color="white" size={150}>
                {/* TODO: Check current time to show day/night icons */}
                {weather && weatherIconDictonary[weather.weatherId]}
              </Icon>
            </>
          ) : null}
        </IconContainer>
      ) : (
        <EmptyContainer />
      )}
      <DetailsContainer>
        {isLoading ? (
          <WeatherDetailsSkeleton showDetails={showDetails} />
        ) : weather ? (
          <>
            <span>{description}</span>
            <ClickableSpan
              data-tooltip-id="conversor-tooltip"
              data-tooltip-content="Clique para converter de °C para °F."
              data-tooltip-place="right"
              data-tooltip-offset={-160}
              data-tooltip-variant="light"
              onClick={unitHandler}
            >{`${weather.temp.toFixed(0)}${weather.unit}`}</ClickableSpan>
            {showDetails ? (
              <>
                <p>{weather.description}</p>
                <SubDetailsContainer>
                  <span>Vento: {weather.wind}</span>
                  <span>Humidade: {weather.humidity}</span>
                  <span>Pressão: {weather.pressure}</span>
                </SubDetailsContainer>
              </>
            ) : null}
          </>
        ) : null}
      </DetailsContainer>
      <Tooltip id="conversor-tooltip" />
    </Container>
  );
};

export default WeatherDetails;
