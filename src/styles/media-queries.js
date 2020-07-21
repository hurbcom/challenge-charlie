import { css } from 'styled-components';

const sizes = {
  desktop: {
    max: 2880,
    min: 1025,
  },
  mobile: {
    max: 767,
    min: 320,
  },
  tablet: {
    max: 1024,
    min: 768,
  },
};

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label].min / 16}em) and (max-width: ${sizes[label].max / 16}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});
