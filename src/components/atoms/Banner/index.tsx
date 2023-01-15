import React from 'react';
import { ContainerBanner, Description, ImageArea, LeftArea, Line, SmallLine, SpaceBetween } from './styles';
import { BannerProps } from './types';


const Banner = ({
  imgSrc,
  dayTitle,
  temperature,
  temperatureDescription,
  additionalInfo,
  backgroundColor
}: BannerProps) => {
  return (
    <ContainerBanner backgroundColor={backgroundColor}>
      <LeftArea>
       {imgSrc && <ImageArea src={imgSrc} alt={temperature}/>}
      </LeftArea>
      <Description>
        <Line>{dayTitle}</Line>
        <Line>{temperature}</Line>
        {
          additionalInfo &&
          <>
          <SpaceBetween />
          <Line>{temperatureDescription}</Line>
          <SmallLine>Vento: {additionalInfo.vento}</SmallLine>
          <SmallLine>Umidade: {additionalInfo.umidade}</SmallLine>
          <SmallLine>Pressão: {additionalInfo.pressao}</SmallLine>
          </>
        }
      </Description>
    </ContainerBanner>
  )
}

export default Banner