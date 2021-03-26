import styled from "styled-components";
import WeatherIcon from "../Icons/WeatherIcon";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0 auto;
  width: 65%;
  background-color: #ddddddaa;
  box-sizing: border-box;
  color: #fff;
  font-size: 22px;
`;

export const SearchBarArea = styled.div`
  color: #817e7c;
  height: 10%;
  position: relative;

  input {
    color: #817e7c;
    background-color: #ffffffaa;
    width: 100%;
    padding: 0 15px 2px 65px;
    height: 100%;
    border: 0;
    outline: unset;
    font-size: 35px;
    text-overflow: ellipsis;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  height: 100%;
  padding: 5px;

  svg {
    height: 100%;
    font-size: 55px;
  }
`;
export const DropdownItem = styled.div<{ selectable?: boolean }>`
  cursor: ${({ selectable }) => (selectable ? "pointer" : "auto")};
  padding: 8px 0;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const ForecastArea = styled.div<{ tempColor: string }>`
  display: flex;
  height: 15%;
  background-color: ${({ tempColor }) => tempColor};

  > div {
    width: 50%;
    padding: 20px;
    margin-left: auto;
  }

  &.today {
    flex-grow: 1;
  }
  &.tomorrow,
  &.day-after-tomorrow {
    background-color: ${({ tempColor }) => tempColor};
  }
`;

export const DayLabel = styled.div`
  text-transform: uppercase;
`;

export const InfoArea = styled.div`
  margin: 20px 0;
`;

export const Description = styled.div`
  text-transform: capitalize;
  padding-bottom: 10px;
`;

export const StyledWeatherIcon = styled(WeatherIcon)`
  height: 100%;
  width: 100%;
`;
