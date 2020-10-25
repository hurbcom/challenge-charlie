import React from 'react';
import { Section, Title, TitleContainer } from './styles';
import { useTransform, useViewportScroll } from 'framer-motion';

export interface ParallaxImageSectionProps {
  title: string;
  imgUrl: string;
  backgroundPositionPercentage?: number;
  backgroundPosition?: number;
  animate?: boolean;
}

export const ParallaxImageSection = ({
  title,
  imgUrl,
  backgroundPositionPercentage = 42,
  backgroundPosition = -300,
  animate = true,
}: ParallaxImageSectionProps) => {
  const { scrollY } = useViewportScroll();
  const transformedScrollY = useTransform(scrollY, [0, 120], [60, 0]);

  return (
    <Section
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundPosition: `${backgroundPositionPercentage}% ${backgroundPosition}px`,
      }}
    >
      <TitleContainer style={animate ? { paddingBottom: transformedScrollY, paddingTop: transformedScrollY } : {}}>
        <Title>{title}</Title>
      </TitleContainer>
    </Section>
  );
};
