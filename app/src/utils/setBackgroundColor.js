export const setBackgroundColor = (forecast, isCelsius) => {
  let forecastDivColor;
  if (!forecast) {
    forecastDivColor = [
      {
        backgroundColor: '#7a8988',
        opacity: '0.9',
      },
      {
        backgroundColor: '#96a1a0',
        opacity: '0.9',
      },
      {
        backgroundColor: '#bfc6c6',
        opacity: '0.9',
      },
    ];
  } else {
    for (const key in forecast) {
      const tempValue = forecast[key].temp;

      const tempValueNumber = parseInt(tempValue);

      const tempValuehot =
        (isCelsius && tempValueNumber >= 35) || (!isCelsius && tempValueNumber >= 95);

      const tempValueCold =
        (isCelsius && tempValueNumber <= 12) || (!isCelsius && tempValueNumber <= 54);

      const tempValueDefault =
        (isCelsius && tempValueNumber < 35 && tempValueNumber > 12) ||
        (!isCelsius && tempValueNumber < 95 && tempValueNumber > 54);

      if (tempValuehot) {
        forecastDivColor = [
          { backgroundColor: '#cb443d' },
          { backgroundColor: '#d4645e' },
          { backgroundColor: '#e29793' },
        ];
      }

      if (tempValueCold) {
        forecastDivColor = [
          { backgroundColor: '#00a7ff' },
          { backgroundColor: '#62c9ff' },
          { backgroundColor: '#ade2ff' },
        ];
      }

      if (tempValueDefault) {
        forecastDivColor = [
          { backgroundColor: '#ffd400' },
          { backgroundColor: '#ffe255' },
          { backgroundColor: '#ffec92' },
        ];
      }
    }
  }

  return forecastDivColor;
};
export default setBackgroundColor;
