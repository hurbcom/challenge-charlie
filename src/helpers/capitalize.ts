export const capitalize = (word: string | undefined) => {
  if (!word) return '';
  const lower = word.toLowerCase();
  return word.charAt(0).toUpperCase() + lower.slice(1);
};
