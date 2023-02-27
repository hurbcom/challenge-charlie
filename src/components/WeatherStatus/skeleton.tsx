import React, { useCallback } from 'react';
import ContentLoader from 'react-content-loader';
import { useWindowWidth } from '@react-hook/window-size';

import { theme } from '~/styles/theme';
import { WeatherStatusProps } from '~/components/WeatherStatus';

const WeatherStatusSkeleton = ({ isDetailed }: Pick<WeatherStatusProps, 'isDetailed'>) => {
  const windowWidth = useWindowWidth();

  const isMobile = windowWidth <= 600;
  const isSmallMobile = windowWidth <= 375;

  const getContentWidth = useCallback(
    (baseWidth: number) => {
      if (isSmallMobile) {
        return baseWidth - 160;
      }

      if (isMobile) {
        return baseWidth - 142;
      }

      return baseWidth;
    },
    [isMobile, isSmallMobile],
  );

  const contentPositionX = {
    bigBox: isMobile ? 20 : 53,
    smallBox: isMobile ? 45 : 115,
    lines: isMobile ? 200 : 344,
  };

  if (!isDetailed) {
    return (
      <ContentLoader
        speed={2}
        width={getContentWidth(500)}
        height={92}
        viewBox={`0 0 ${getContentWidth(500)} 92`}
        opacity={0.5}
        backgroundColor={theme.colors.white}
        foregroundColor={theme.colors.gray200}
      >
        <rect x={contentPositionX.smallBox} y="13" rx="3" ry="3" width="92" height="89" />
        <rect x={contentPositionX.lines} y="22" rx="3" ry="3" width="104" height="24" />
        <rect x={contentPositionX.lines} y="58" rx="3" ry="3" width="99" height="24" />
      </ContentLoader>
    );
  }

  return (
    <ContentLoader
      speed={2}
      width={getContentWidth(500)}
      height={240}
      opacity={0.5}
      viewBox={`0 0 ${getContentWidth(500)} 240`}
      backgroundColor={theme.colors.white}
      foregroundColor={theme.colors.gray200}
    >
      <rect x={contentPositionX.bigBox} y="22" rx="3" ry="3" width={isMobile ? 140 : 236} height="215" />
      <rect x={contentPositionX.lines} y="22" rx="3" ry="3" width="69" height="24" />
      <rect x={contentPositionX.lines} y="58" rx="3" ry="3" width="99" height="24" />
      <rect x={contentPositionX.lines} y="114" rx="3" ry="3" width="155" height="24" />
      <rect x={contentPositionX.lines} y="159" rx="3" ry="3" width="155" height="16" />
      <rect x={contentPositionX.lines} y="184" rx="3" ry="3" width="155" height="16" />
      <rect x={contentPositionX.lines} y="209" rx="3" ry="3" width="155" height="16" />
    </ContentLoader>
  );
};

export default WeatherStatusSkeleton;
