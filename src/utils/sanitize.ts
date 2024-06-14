export const sanitizeString = (input: string): string => {
  const unsafeChars = /[<>/"'`;(){}[\]\\]/g;
  return input.replace(unsafeChars, '');
};
