import styled from 'styled-components';

export const DetailedWeatherStyled = styled.div.attrs(() => ({
  className: 'detailed-weather',
}))`
  display: grid;
  grid-template-columns: 60% 40%;

  @keyframes skeleton-blink {
    from {
      background-color: #9a9a9a;
    }

    to {
      background-color: #ababab;
    }
  }

  .detailed-weather {
    &__info {
      padding: 10px 0px;
      color: white;
      font-size: 1.4rem;
      line-height: 2rem;
    }

    &__temperature {
      display: flex;
      flex-direction: column;
      margin-bottom: 10px;
      font-weight: bold;
      cursor: pointer;
      width: 5rem;
      transition: transform 0.1s linear;

      :hover {
        transform: scale(1.1);
      }
    }

    &__other-infos {
      margin-top: 10px;
      line-height: 1.5rem;
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
      animation: skeleton-blink 1s linear infinite;
    }
  }

  .detailed-weather-skeleton__info {
    padding: 3rem 0;

    .detailed-weather-skeleton__temperature {
      width: 8rem;
      background-color: #9a9a9a;
      height: 1.5rem;
      border-radius: 2px;
      animation: skeleton-blink 1s linear infinite;
    }

    .detailed-weather-skeleton__description {
      width: 5rem;
      height: 1rem;
      background-color: #9a9a9a;
      margin-top: 0.5rem;
      border-radius: 2px;
      animation: skeleton-blink 1s linear infinite;
    }
  }

  @media (min-width: 1025px) {
    .detailed-weather {
      &__info {
        font-size: 2rem;
        line-height: 3rem;
      }

      &__other-infos {
        margin-top: 30px;
        line-height: 2.5rem;
        font-size: 2rem;
      }

      &__icon {
        img {
          width: 20rem;
        }
      }
    }
  }
`;
