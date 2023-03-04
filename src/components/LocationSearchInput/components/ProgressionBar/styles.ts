import styled, { css, DefaultTheme } from 'styled-components';

import { ProgressBarStatusEnum } from '@enums/ProgressBarStatusEnum';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 4px;
    border-radius: 100px;

    background: ${theme.colors.gray};
  `}
`;

const progressionModifiers = {
  [ProgressBarStatusEnum.beginning]: (theme: DefaultTheme) =>
    css`
      width: 25%;
      background: ${theme.colors.darkGray};
    `,
  [ProgressBarStatusEnum.middle]: (theme: DefaultTheme) =>
    css`
      width: 75%;
      background: ${theme.colors.darkGray};
    `,
  [ProgressBarStatusEnum.end]: (theme: DefaultTheme) =>
    css`
      width: 100%;
      background: ${theme.colors.darkGray};
    `,
  default: () =>
    css`
      width: 0%;
    `
};

export const Progression = styled.div<{ progressBarStatus: ProgressBarStatusEnum }>`
  ${({ theme, progressBarStatus }) => css`
    width: 0%;
    height: 100%;
    border-radius: 100px;

    background: ${theme.colors.gray};
    transition: 1s;

    ${progressionModifiers[progressBarStatus](theme)}
  `}
`;
