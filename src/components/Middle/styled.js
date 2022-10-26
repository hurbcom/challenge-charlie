import styled from "styled-components";
import * as Color from "color";

export const Content = styled.div`
  display: flex;
  width: 100%;
  min-height: 600px;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  font-weight: 700;
  background-color: ${(props) => Color(props.color).alpha(0.5)};
  border-radius: 16px;
  margin-top: 16px;

  p {
    font-size: 16px;
  }
  @media (min-width: 600px) {
    width: 80%;
  }
  @media (min-width: 1024px) {
    width: 60%;
  }
  @media (min-width: 1100px) {
    width: 50%;
  }
  @media (min-width: 2000px) {
    width: 30%;
  }
  .clickText {
    cursor: pointer;
    text-align: center;
    border-radius: 4px;
    border: none;
    &:hover {
      border: 2px solid #ffff;
    }
  }
`;
export const TitleContainer = styled.div`
  background-color: #707070;
  width: 95%;
  height: 15%;
  border-radius: 14px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const ImgTitleContainer = styled.div`
  padding: 16px;
  width: 50px;
  height: 50px;
  img {
    width: 100%;
    height: 100%;
  }
`;
export const ContainerWeatherData = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  border-radius: 14px;
  background-color: ${(props) => Color(props.color).alpha(0.75)};
  transition: 1s;
  &:hover {
    background-color: ${(props) => Color(props.color).darken(0.6)};
  }
  @media (min-width: 600px) {
    flex-direction: row;
  }
`;
export const ContentImgLeft = styled.div`
  display: flex;
  padding: 30px;
  img {
    width: 250px;
    height: 250px;
  }
  @media (min-width: 600px) {
    width: 100%;
    justify-content: center;
  }
`;
export const ContentDetailsRight = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;

  @media (min-width: 600px) {
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    p {
      font-size: 24px;
    }
  }
`;

export const TomorrowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-direction: column;
  background-color: ${(props) => Color(props.color).alpha(0.7)};
  align-items: center;
  transition: 1s;
  border-radius: 14px;
  &:hover {
    background-color: ${(props) => Color(props.color).darken(0.6)};
  }
`;
export const NextDaysContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => Color(props.color).alpha(1)};
  transition: 1s;
  border-radius: 14px;
  &:hover {
    background-color: ${(props) => Color(props.color).darken(0.6)};
  }
`;
