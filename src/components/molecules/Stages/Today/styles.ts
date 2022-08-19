import styled from 'styled-components';
import { TWeatherEnum } from '../types';

export const Styles = {
  Container: styled.div<{ weatherColor?: TWeatherEnum }>`
    display: flex;
    align-items: center;
    background-image: linear-gradient(
      to right,
      rgb(${({ weatherColor }) => weatherColor} / 85%),
      rgb(${({ weatherColor }) => weatherColor} / 50%)
    );
    justify-content: space-between;
    overflow: hidden;
    position: relative;
    height: 200px;
    padding: 0 8px;
    transition: all ease 0.3s;

    @media only screen and (min-width: 768px) {
      padding: 0 28px;
    }

    .content {
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      align-items: center;

      @media only screen and (min-width: 768px) {
        flex-direction: row;
      }

      .temperature {
        display: flex;
        padding: 16px 0;

        .pipe {
          border-right: 1px solid rgb(255 255 255 / 60%);
          margin: 0 22px;
        }
      }

      .values {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }

    .icon {
      min-width: 100px;
      margin-right: 20px;
      opacity: 0.7;
      display: none;
      transform: scale(0.9);
      transition: ease all 0.3s;

      @media only screen and (min-width: 768px) {
        display: block;
      }
      > div {
        display: flex;
        justify-content: center;
      }
    }

    &:hover {
      .icon {
        opacity: 0.9;
        transform: scale(1);
      }
    }
  `,
  Title: styled.h2`
    font-size: 18px;
    font-weight: 200;
    margin: 0;
    color: #fff;
  `,
  Element: styled.div`
    display: flex;
    align-items: center;
  `,
  TextCenter: styled.div`
    text-align: center;
  `,
  Label: styled.div`
    font-size: 10px;
    background-color: #fff;
    padding: 1px 5px;
    border-radius: 8px;
    margin-left: 10px;
  `,
  Text: styled.p<{ fontSize?: string }>`
    font-size: ${({ fontSize }) => fontSize || '10px'};
    padding: 0;
    margin: 0;
    color: #fff;
    font-weight: 400;
  `,
};
