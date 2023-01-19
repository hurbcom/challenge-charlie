import React from 'react'
import { ContainerBanner, Description, ImageArea, LeftArea, Line, SmallLine, SpaceBetween } from './styles'
import { BannerProps } from './types'


const Banner = ({
  imgSrc,
  dayTitle,
  temperature,
  temperatureDescription,
  additionalInfo,
  backgroundColor,
  temperatureConverter,
  height,
  opacity,
}: BannerProps) => {
  return (
    <ContainerBanner backgroundColor={backgroundColor} height={height} opacity={opacity}>
      <LeftArea>
       {imgSrc && <ImageArea src={imgSrc} alt={`temperature - ${temperature}`}/>}
      </LeftArea>
      <Description>
        <Line>{dayTitle}</Line>
        <Line onClick={temperatureConverter} tempMouseHover={true}>{temperature}</Line>
        {
          additionalInfo &&
          <>
          <SpaceBetween />
          <Line>{temperatureDescription}</Line>
          <SpaceBetween />
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