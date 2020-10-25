import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
`;

export const ContentContainer = styled.div``;

export const NavBar = styled.nav`
  flex-flow: row nowrap;
  justify-content: flex-start;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
  background-color: #1b1b1b;
  padding: 0.5rem 2%;

  @media (min-width: 1024px) {
    padding-left: 10%;
    padding-right: 10%;
  }
`;

export const NavLinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: auto;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
`;

export const NavLink = styled.a<{ selected?: boolean }>`
  color: ${({ selected }) => (selected ? 'rgba(255, 255, 255)' : 'rgba(255, 255, 255, 0.5)')};
  padding: 0.5rem;
  margin: 0 0.5rem;
  display: block;
  text-decoration: none;
  background-color: transparent;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  transition: color 0.3s, border-color 0.3s;
  border-bottom: 1px ${({ selected }) => (selected ? 'rgba(255, 255, 255)' : 'transparent')} solid;

  :hover {
    color: rgba(255, 255, 255);
    //border-bottom: 1px white solid;
    text-decoration: none;
  }
`;

export const BrandAnchor = styled.a`
  display: flex;
  flex-direction: column;

  color: rgba(255, 255, 255, 0.5);
  align-items: center;
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  line-height: inherit;
  white-space: nowrap;
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;

export const StyledLogo = styled.img`
  margin: 0 16px 4px;
`;

export const FooterContainer = styled.div`
  width: 100%;
  margin-top: 1rem;
`;

export const Footer = styled.div`
  background-color: #1b1b1b;
  width: 100%;
  height: 3.5rem;
  display: flex;
  align-items: center;
  padding-left: 10%;
`

export const FooterText = styled.p`
  color: #a7a7a7;
  font-size: 0.8rem;
`

export const FooterLink = styled.a`
  text-decoration: none;
  color: #cdcdcd;
  
  :hover {
    text-decoration: none;
  }
`
