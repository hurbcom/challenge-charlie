export const captalizeString = (string: string) => {
  const result = string
    .split(" ")
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(" ");

  return result;
};
