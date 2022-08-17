const size = {
  xs: "480px",
  sm: "1024px",
};

const device = {
  xs: `max-width: ${size.xs}`,
  sm: `max-width: ${size.sm}`,
  lg: `min-width: ${size.sm}`,
};

export const breakpoints = { size, device };
