import styled, { css } from "styled-components";

const IconModifiers = {
  small: () => css`
    font-size: 5rem;
    line-height: 5rem;
  `,
};

export const Icon = styled.div`
  ${({ theme, smallCard }) => css`
    width: 50%;
    font-size: 14rem;
    line-height: 14rem;
    display: flex;
    justify-content: center;
    color: ${theme.colors.textColors[100]};
    ${smallCard && IconModifiers.small()}
  `}
`;

const WrapperModifiers = {
  null: (theme) => css`
    background: ${theme.colors.temperatures.null};
  `,
  cold: (theme) => css`
    background: ${theme.colors.temperatures.cold};
  `,
  normal: (theme) => css`
    background: ${theme.colors.temperatures.normal};
  `,
  hot: (theme) => css`
    background: ${theme.colors.temperatures.hot};
  `,
};

export const Wrapper = styled.div`
  ${({ theme, temperature }) => css`
    display: flex;
    gap: 48px;
    padding: 16px 48px;
    width: 500px;
    ${!temperature && WrapperModifiers.null(theme)}
    ${temperature <= 15 && WrapperModifiers.cold(theme)}
    ${temperature <= 35 && temperature > 15 && WrapperModifiers.normal(theme)}
    ${temperature > 35 && WrapperModifiers.hot(theme)} 
    border-top: 1px solid rgb(255 255 255 / 25%);
    @media (max-width: 768px) {
      width: 100%;
      padding: 16px;
      gap: 16px;
    }
  `}
`;

export const Content = styled.div`
  width: 50%;
`;
export const Mesure = styled.div`
  ${({ theme }) => css`
    span {
      font-size: 1.6rem;
      font-weight: 400;
      color: ${theme.colors.textColors[100]};
    }
  `}
`;
export const Temperature = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 8px;
    span {
      margin-top: 4px;
      font-size: 2.4rem;
      font-weight: 500;
      color: ${theme.colors.textColors[100]};
      cursor: pointer;
      padding: 0 8px;
      border-radius: 8px;
      background: rgba(60, 60, 60, 0.13);
    }
  `}
`;

export const Description = styled.div`
  ${({ theme }) => css`
    font-size: 2.4rem;
    font-weight: 500;
    margin-top: 16px;
    color: ${theme.colors.textColors[100]};
  `}
`;
export const Mesures = styled.ul`
  list-style: none;
  padding: 8px 0;
`;
export const MesureItem = styled.li`
  ${({ theme }) => css`
    font-size: 1.6rem;
    font-weight: 400;
    color: ${theme.colors.textColors[100]};
  `}
`;
