import styled from 'styled-components';

export const ButtonDrawAnchor = styled.a`
  font-size: 1.2em;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.1em;

  position: relative;
  display: inline-block;
  color: #a7a7a7;
  border-bottom: 2px solid #a7a7a7;
  cursor: pointer;
  overflow: hidden;
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;
  
  &:hover {
    text-decoration: none;
  }

  &:after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 2px;
    background: #a7a7a7;
    transform: translateY(100%);
    transition: transform 0.2s ease-in-out;
    transition-delay: 0.6s;
  }
  & > span {
    position: relative;
    display: block;
    padding: 0.5em;
    color: inherit;
  }

  & > span:before,
  & > span:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    background: #a7a7a7;
    transition: transform 0.2s ease-in-out;
  }

  & > span:before {
    height: 2px;
    width: 100%;
    transform: translateX(100%);
    transition-delay: 0.4s;
  }
  & > span:after {
    height: 100%;
    width: 2px;
    transform: translateY(-100%);
    transition-delay: 0.2s;
  }
  &:hover:after,
  &:hover > span:before,
  &:hover > span:after {
    transform: translate(0, 0);
  }
  &:hover:after {
    transition-delay: 0s;
  }
  &:hover > span:before {
    transition-delay: 0.2s;
  }
  &:hover > span:after {
    transition-delay: 0.4s;
  }
  &:hover {
    color: #1b1b1b;
    background-color: #a7a7a7;
    transition-delay: 0.6s;
  }
`;
