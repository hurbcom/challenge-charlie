import { FunctionComponent } from 'react';

/* eslint-disable  @typescript-eslint/no-explicit-any */
type OnClick = () => Promise<any>;

export interface IAnimated {
  animationDuration?: number;
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  Component: FunctionComponent<{ onClick?: () => any }>;
  onClick?: OnClick;
}
