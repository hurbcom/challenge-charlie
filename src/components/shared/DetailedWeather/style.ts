import styled from 'styled-components';

export const DetailedWeatherStyled = styled.div.attrs(() => ({
  className: 'detailed-weather',
}))`
  display: grid;
  grid-template-columns: 60% 40%;

  .detailed-weather {
    &__info {
      padding: 10px 0px;
      color: white;
      font-size: 1.4rem;
      line-height: 30px;
    }

    &__temperature {
      display: flex;
      flex-direction: column;
      margin-bottom: 10px;
    }

    &__other-infos {
      margin-top: 10px;
      line-height: 22px;
      font-size: 1rem;
      display: flex;
      flex-direction: column;
    }

    &__icon {
      text-align: center;
      padding: 20px;
      img {
        width: 10rem;
        filter: invert(1);
      }
    }
  }

  .detailed-weather-skeleton__icon {
    margin: 0 auto;
    padding: 3rem;

    > div {
      background-color: #9a9a9a;
      width: 9rem;
      height: 9rem;
      border-radius: 50%;
    }
  }

  .detailed-weather-skeleton__info {
    padding: 3rem 0;

    .detailed-weather-skeleton__temperature {
      width: 8rem;
      background-color: #9a9a9a;
      height: 1.5rem;
      border-radius: 2px;
    }

    .detailed-weather-skeleton__description {
      width: 5rem;
      height: 1rem;
      background-color: #9a9a9a;
      margin-top: 0.5rem;
      border-radius: 2px;
    }
  }
`;
