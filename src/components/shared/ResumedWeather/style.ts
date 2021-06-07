import Color from 'color';
import styled from 'styled-components';

export const ResumedWeatherStyled = styled.div<{ backgroundColor: string | Color }>`
  display: grid;
  grid-template-columns: 60% 40%;
  padding-left: 20px;
  padding-right: 20px;
  align-items: center;
  height: 5rem;
  background: ${(props) => (props.backgroundColor as Color).fade(0.5).string()};
  border-top: 1px solid ${(props) => (props.backgroundColor as Color).fade(0.7).string()};
  border-bottom: 1px solid ${(props) => (props.backgroundColor as Color).fade(0.7).string()};

  .resumed-weather__icon {
    width: 3rem;

    img {
      filter: invert(1);
    }
  }

  .resumed-weather-skeleton__icon {
    background-color: #9a9a9a;
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
  }

  .resumed-weather__weather {
    display: flex;
    flex-direction: column;
    color: white;
    font-size: 1rem;
    line-height: 2rem;
    cursor: pointer;

    .resumed-weather__description {
      text-transform: uppercase;
    }
  }

  .resumed-weather-skeleton__description {
    background-color: #9a9a9a;
    width: 6.5rem;
    height: 1.5rem;
    margin-bottom: 5px;
    border-radius: 2px;
  }

  .resumed-weather-skeleton__temperature {
    width: 3.5rem;
    height: 1rem;
    background-color: #9a9a9a;
    border-radius: 2px;
  }

  @media (min-width: 1025px) {
    height: 8rem;

    .resumed-weather__weather {
      font-size: 2rem;
      line-height: 3rem;
    }

    .resumed-weather__icon {
      width: 5rem;
    }
  }
`;
