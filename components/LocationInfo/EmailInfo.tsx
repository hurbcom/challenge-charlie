import React from 'react';
import { InfoContainer, InfoText, StyledEmail, WhiteText, InfoLink } from './styles';

export const EmailInfo = () => {
  return (
    <InfoContainer>
      <InfoLink
        href={'mailto:stationoil@hotmail.com'}
        whileHover={{ scale: 1.1, opacity: 0.8 }}
        whileTap={{ scale: 1.3, opacity: 0.8 }}
      >
      <StyledEmail width={'48'} height={'48'} fill={'#efefef'} />
      </InfoLink>
      <InfoText>
        <WhiteText>Email: </WhiteText>stationoil@hotmail.com
      </InfoText>
    </InfoContainer>
  );
};
