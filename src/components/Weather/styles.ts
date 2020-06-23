import styled from 'styled-components';
import { shade } from 'polished';

interface ContainerProps {
  active: boolean;
  temperature: number;
  degrade: number;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  padding: 20px;
  color: #fff;
  transition: 1s;
  background: ${(props): string => {
    if (props.temperature <= 15) {
      return shade(`0.${props.degrade}`, '#7FB8DC');
    }
    if (props.temperature > 15 && props.temperature < 35) {
      return shade(`0.${props.degrade}`, '#E7D636');
    }
    if (props.temperature === 100) {
      return shade(`0.${props.degrade}`, '#999');
    }
    if (props.temperature >= 35) {
      return shade(`0.${props.degrade}`, '#DA2F40');
    }
    return shade(`0.${props.degrade}`, '#999');
  }};

  @media (max-width: 768px) {
    align-items: center;
  }

  :hover {
    cursor: ${(props) => (props.active ? 'default' : 'pointer')};
  }

  svg {
    transition: 1s;
    width: ${(props) => (props.active ? '250px' : '70px')};
    height: ${(props) => (props.active ? '250px' : '70px')};
    margin-right: ${(props) => props.active && '80px'};
    color: #fff;

    @media (max-width: 768px) {
      width: ${(props) => (props.active ? '150px' : '70px')};
      height: ${(props) => (props.active ? '150px' : '70px')};
      margin-right: ${(props) => props.active && '0px'};
    }
  }

  div {
    margin-left: 50px;
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
      margin-left: 10px;
    }

    button {
      display: flex;
      align-items: center;
      font-size: 1.6rem;
      font-weight: normal;
      background: none;
      border: none;
      color: #fff;
      width: 20px;

      @media (max-width: 768px) {
        font-size: 1.4rem;
      }

      &:hover {
        color: ${shade(0.1, '#7FB8DC')};
      }
    }

    h1 {
      font-size: 1.6rem;
    }

    fieldset {
      display: flex;
      flex-direction: column;
      border: none;
      transition: 0.5s;
      height: ${(props) => !props.active && '0px'};
      opacity: ${(props) => !props.active && '0'};

      @media (max-width: 768px) {
        display: ${(props) => !props.active && 'none'};
      }

      h1 {
        font-size: 1.6rem;
        margin-bottom: 8px;
        margin-top: 15px;

        @media (max-width: 768px) {
          font-size: 1.2rem;
          margin-bottom: 5px;
          margin-top: 5px;
        }
      }

      p {
        margin-top: 20px;
        font-size: 1.2rem;

        @media (max-width: 768px) {
          margin-top: 10px;
        }

        & + p {
          margin-top: 0;
        }
      }
    }
  }
`;
