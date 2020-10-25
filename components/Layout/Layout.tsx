import React from 'react';

import './layout.css';
import {
  AppContainer,
  BrandAnchor,
  ContentContainer,
  Footer,
  FooterContainer,
  FooterLink,
  FooterText,
  NavBar,
  NavLink,
  NavLinkWrapper,
  StyledLogo,
} from './styles';
import { useRouter } from 'next/router';

export const Layout = ({ children }) => {
  const router = useRouter();

  const navigateHome = e => {
    e.preventDefault();
    router.push('/');
  };

  const navigateLocalizacao = e => {
    e.preventDefault();
    router.push('/localizacao');
  };

  return (
    <AppContainer>
      <ContentContainer>
        <NavBar>
          <BrandAnchor href="/" onClick={navigateHome}>
            <StyledLogo src="/assets/station-logo.png" width="auto" height="50" alt="Station Oil Logo" />
          </BrandAnchor>
          <NavLinkWrapper>
            <NavLink href="/" onClick={navigateHome} selected={router.pathname === '/'}>
              RANKING
            </NavLink>
            <NavLink href="/" onClick={navigateLocalizacao} selected={router.pathname === '/localizacao'}>
              Localização
            </NavLink>
            {/*<NavLink href="/" onClick={navigateHome}>*/}
            {/*  Quem somos*/}
            {/*</NavLink>*/}
          </NavLinkWrapper>
        </NavBar>
        {children}
      </ContentContainer>
      <FooterContainer>
        <Footer>
          <FooterText>
            © Station Oil RJ 2020 | Created by <FooterLink href={'https://www.linkedin.com/in/eriktronkos'}>Erik</FooterLink>
          </FooterText>
        </Footer>
      </FooterContainer>
    </AppContainer>
  );
};
