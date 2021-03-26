import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0 auto;
  width: 65%;
  background-color: #ddddddaa;
  box-sizing: border-box;
`;

export const SearchBarArea = styled.div`
  height: 10%;
  position: relative;

  input {
    background-color: #ffffffaa;
    width: 100%;
    padding: 0 2px 2px 70px;
    height: 100%;
    border: 0;
    outline: unset;
    font-size: 35px;
    //padding-left: 70px;
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
  }

  &.today {
    flex-grow: 1;
  }
  &.tomorrow,
  &.day-after-tomorrow {
    background-color: ${({ tempColor }) => tempColor};
    > div {
      margin-left: auto;
    }
  }
`;
