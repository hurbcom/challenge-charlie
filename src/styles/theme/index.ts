export const defaultTheme: Theme = {
  firstDay: 'rgba(74, 74, 74, 0.6);',
  secondDay: 'rgba(74, 74, 74, 0.9);',
  thirdDay: 'rgba(74, 74, 74, 1);',
};

export const cold: Theme = {
  firstDay: 'rgba(33, 144, 255, 0.7);',
  secondDay: 'rgba(6, 104, 201, 0.7);',
  thirdDay: 'rgba(18, 75, 130, 0.9);',
};
export const normal: Theme = {
  firstDay: 'rgba(255, 234, 5, 0.6);',
  secondDay: 'rgba(255, 221, 0, 0.8);',
  thirdDay: 'rgba(204, 177, 0, 0.7);',
};

export const warm: Theme = {
  firstDay: 'rgba(255, 76, 56, 0.6);',
  secondDay: 'rgba(219, 63, 46, 0.8);',
  thirdDay: 'rgba(181, 50, 36, 0.7);',
};

export interface Theme {
  firstDay: string;
  secondDay: string;
  thirdDay: string;
}
