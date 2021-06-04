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

    &__temp {
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
        width: 90%;
        filter: invert(1);
      }
    }
  }
`;
