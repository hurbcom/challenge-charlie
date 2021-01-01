const capitalizeLetters = (sentence) => {
  const sentences = sentence.split(' ');
  const capitalizeList = sentences.map(
    (sentence) => sentence.charAt(0).toUpperCase() + sentence.slice(1)
  );

  return capitalizeList.join(' ');
};

export default {
  capitalizeLetters
};
