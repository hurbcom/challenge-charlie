import React from 'react';

import { ProgressBarStatusEnum } from '@enums/ProgressBarStatusEnum';

import { Container, Progression } from './styles';

interface ProgressionBar {
  progressBarStatus: ProgressBarStatusEnum;
}

export const ProgressionBar = ({ progressBarStatus }: ProgressionBar) => {
  return (
    <Container>
      <Progression progressBarStatus={progressBarStatus} />
    </Container>
  );
};
