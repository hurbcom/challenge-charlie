import styled, { css } from "styled-components";
import WeatherIcon from "../Icons/WeatherIcon";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0 auto;
  width: 65%;
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
  background-color: ${({ tempColor }) => tempColor};
  flex-wrap: wrap;
  font-weight: 600;

  > div {
    padding: 18px;
  }

  &.today {
    flex-grow: 1;
    justify-content: center;

    > div {
      min-width: 250px;
      width: 50%;
    }
  }
  &.tomorrow,
  &.day-after-tomorrow {
    height: 15%;
    background-color: ${({ tempColor }) => tempColor};

    > div {
      margin-left: auto;
    }
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

export const Value = styled.div<{ loading: boolean }>`
  position: relative;

  ${({ loading }) =>
    loading
      ? css`
          //display: none;
          min-width: 200px;
          opacity: 0.3;
          border-radius: 5px;
          color: transparent;
          background-color: #eee;

          &:before {
            content: "";
            display: block;
            position: absolute;
            top: 0;
            height: 100%;
            width: 200px;
            background: linear-gradient(
              to right,
              transparent 0%,
              #fff 50%,
              transparent 100%
            );
            animation: load 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;

            @keyframes load {
              from {
                left: 0;
              }
              to {
                left: calc(100% - 200px);
              }
            }
          }
        `
      : ""};
`;
