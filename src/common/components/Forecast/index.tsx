import { Wrapper } from "./style";

interface ForecastProps {
  isPostTomorrow?: boolean;
}

export const Forecast = ({ isPostTomorrow }: ForecastProps) => {
  return (
    <Wrapper isPostTomorrow={isPostTomorrow}>
      <p>forecast</p>
    </Wrapper>
  );
};
