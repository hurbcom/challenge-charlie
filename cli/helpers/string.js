const inquirerFilters = (value = '') => {
  const filters = [formatTrim, formatToLowerCase, replaceSpaceBetweenWords];

  filters.forEach(func => {
    value = func(value);
  });

  return value;
};

const replaceSpaceBetweenWords = value => value.replace(/\s+/g, '-');

const formatToLowerCase = value => value.toLowerCase();

const formatTrim = value => value.trim();

const firstCapitalLetter = string =>
  string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();

const humanize = str =>
  str
    .split(/-/gi)
    .map(s => s.length && firstCapitalLetter(s))
    .join('');

module.exports = { humanize, firstCapitalLetter, inquirerFilters };
