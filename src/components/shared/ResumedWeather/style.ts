import Color from 'color';
import styled from 'styled-components';

export const ResumedWeatherStyled = styled.div<{ backgroundColor: string | Color }>`
  display: grid;
  grid-template-columns: 60% 40%;
  padding-left: 20px;
  padding-right: 20px;
  align-items: center;
  height: 80px;
  background: ${(props) => (props.backgroundColor as Color).fade(0.5).string()};
  border-top: 1px solid ${(props) => (props.backgroundColor as Color).fade(0.7).string()};
  border-bottom: 1px solid ${(props) => (props.backgroundColor as Color).fade(0.7).string()};

  .resumed-weather__icon {
    width: 3rem;

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
