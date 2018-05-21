export function convert(temp) {
    if(temp === undefined)
      return '';
    return ((parseFloat(temp) - 32) / 1.8).toFixed(2);
}
