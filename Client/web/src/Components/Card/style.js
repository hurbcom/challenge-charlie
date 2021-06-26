import styled from 'styled-components';
import colors from '../../Styles/colors';

export const CardWrapper = styled.div`
  width: 500px;
  height: 500px;
  background-color: #000;
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  color: ${colors.white};

  @media screen and (max-width: 600px) {
    width: 350px;
    height: 450px;
  }
`;

export const WeaterContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  h2 {
    margin: 0;
    font-size: 20px;
    font-weight: 600;
    text-transform: uppercase;
  }
`;

export const WeaterContent = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: ${colors.yellow};
`;

export const Icon = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Informations = styled.div`
  flex: 1;
  text-align: left;
  padding: 30px;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;

  div:first-child {
    margin-bottom: 30px;
  }

  div:nth-child(3) {
    margin-top: 30px;
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 100%;

  div:first-child {
    background-color: ${colors.yellow_dark};
    padding: 10px 130px;

    span {
      position: relative;
      right: 40px;
    }
  }

  @media screen and (max-width: 700px) {
    div:first-child {
      background-color: ${colors.yellow_dark};
      padding: 10px 90px;

      span {
        position: relative;
        right: 50px;
      }
    }
  }
`;

export const After = styled.div`
  height: 50%;
  text-align: right;
  background-color: ${colors.yellow};
  padding: 10px 30px;

  span {
    position: relative;
    right: 140px;
  }
`;
