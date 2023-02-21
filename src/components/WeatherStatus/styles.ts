import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    gap: ${theme.sizings[32]};
    grid-template-columns: 1fr 0.8fr;

    height: 8rem;
    padding: ${theme.sizings[24]} ${theme.sizings[32]};

    background: ${theme.colors.gray200};

    img {
      margin: 0 auto;
    }
  `}
`;

export const Info = styled.div`
  ${({ theme }) => css`
    width: 100%;

    > span {
      display: block;

      color: ${theme.colors.black};
      font-size: ${theme.sizings[24]};
      font-weight: 500;

      & + & {
        margin-top: 10px;
      }
    }
  `}
`;

export const Temperature = styled.span`
  cursor: pointer;
`;
