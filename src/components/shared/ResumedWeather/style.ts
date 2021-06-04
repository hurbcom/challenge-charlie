import styled from 'styled-components';

export const ResumedWeatherStyled = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  padding-left: 20px;
  padding-right: 20px;
  align-items: center;
  height: 80px;
  background-color: #e0a41d66;
  border-top: 1px solid #a5793d;
  border-bottom: 1px solid #a5793d;

  .resumed-weather__icon {
    width: 25%;

    img {
      filter: invert(1);
    }
  }

  .resumed-weather__weather {
    display: flex;
    flex-direction: column;
    color: white;
    font-size: 1em;
    line-height: 26px;

    .resumed-weather__description {
      text-transform: uppercase;
    }
  }
`;
