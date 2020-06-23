import styled from 'styled-components';

export const ContentContainer = styled.div`
  max-width: 50%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  opacity: 0.9;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 10px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  padding: 10px;
  background: #f5f5f5;
  margin: 10px 0;
  border-radius: 6px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);

  svg {
    width: 50px;
    height: 50px;
    margin-right: 10px;
    color: #333;
  }

  form {
    display: flex;
    width: 100%;

    input {
      width: 100%;
      border: none;
      background: #f5f5f5;
      font-size: 1.2rem;
      color: #333;

      ::placeholder {
        font-size: 1.2rem;
      }
    }
  }
`;

export const WeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  border-radius: 6px;
`;
