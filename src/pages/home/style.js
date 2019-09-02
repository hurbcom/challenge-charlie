import styled, { keyframes } from 'styled-components';

import { device } from './../../styles/devices';

export const Wrapper = styled.div`
  flex: 1;
  height: 100%;
  overflow: hidden;
  background: url(${props => props.background}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  animation: ${props => activeIn} forwards 2s;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  padding: 10px;
`;

export const LoadingWrapper = styled.div`
  width: 40%;
  margin: 50px auto;
  text-align: center;
  color: #92D2E6;
  @media ${device.small} {
    width: 90%;
  }
`;

export const Header = styled.header`
  width: 60%;
  height: 15%;
  @media ${device.small} {
    width: 90%;
  }
  margin: 10px auto;
  padding: 10px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.7);
  overflow: hidden;
  display: flex;
  align-items: center;
  color: #fff;

  img { 
    height: 90%;
  }

  div {
    @media ${device.small} {
      font-size: 30px;
    }
    font-size: 40px;
    margin-left: 20px;
    color: #333;
    font-weight: bold;
  }
`;

const activeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;