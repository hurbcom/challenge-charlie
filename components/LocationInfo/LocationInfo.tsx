import React from 'react';
import {InfoText, InfoContainer, StyledSmartphone, WhiteText, StyledLocation} from './styles';

export const LocationInfo = () => {
  return (
    <InfoContainer>
      <StyledLocation width={'48'} height={'48'} fill={'#efefef'} />
      <InfoText>
        Rua Calmom, 36 - Curicica
      </InfoText>
      <InfoText>
        Rio de Janeiro, RJ
      </InfoText>
    </InfoContainer>
  );
};
