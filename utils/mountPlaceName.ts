export const mountPlaceName = ({ city, state, country }: { city?: string; state: string; country: string }) => {
  return `${city ? `${city}, ` : ''}${state ? `${state}, ` : ''}${country}`;
};
