import React from 'react';
import { InfoText, InfoContainer, StyledSmartphone, WhiteText, InfoLink } from './styles';

export const PhoneInfo = () => {
  return (
    <InfoContainer>
      <InfoLink
        href={'tel:+5521991436753'}
        whileHover={{ scale: 1.1, opacity: 0.8 }}
        whileTap={{ scale: 1.3, opacity: 0.8 }}
      >
        <StyledSmartphone width={'48'} height={'48'} fill={'#efefef'} />
      </InfoLink>
      <InfoText>
        <WhiteText>Telefone: </WhiteText>(21) 99143-6753
      </InfoText>
    </InfoContainer>
  );
};
