import Color from 'color';
import { ResumedWeatherSkeletonStyled } from './style';

export const ResumedWeatherSkeleton = ({ backgroundColor }: { backgroundColor: Color }) => (
  <ResumedWeatherSkeletonStyled backgroundColor={backgroundColor}>
    {[...Array(2)].map(() => (
      // eslint-disable-next-line react/no-array-index-key
      <>
        <div className="resumed-weather-skeleton__icon" />
        <div className="resumed-weather__weather">
          <span className="resumed-weather-skeleton__description" />
          <span className="resumed-weather-skeleton__temperature" />
        </div>
      </>
    ))}
  </ResumedWeatherSkeletonStyled>
);
