function getCardinalDirection(degree) {
  if (degree == null)
    return "";
    
  if (degree >= 337.5 && degree < 22.5)
    return "N";

  if (degree >= 22.5 && degree < 67.5)
    return "NE";

  if (degree >= 67.5 && degree < 112.5)
    return "L";

  if (degree >= 112.5 && degree < 157.5)
    return "SE";

  if (degree >= 157.5 && degree < 202.5)
    return "S";
  
  if (degree >= 202.5 && degree < 247.5)
    return "SO";
  
  if (degree >= 247.5 && degree < 292.5)
    return "O";
  
  return "NO";
}

function getWeatherConditionIcon(code) {
  switch (code) {
    case 31:
    case 33:
    case 34:
    case 32:
    case 36:
      return 2;
    case 25:
      return 6;
    case 26:
    case 27:
    case 28:
    case 29:
    case 30:
    case 44:
      return 8;
    case 19:
    case 21:
    case 22:
      return 12;
    case 4:
    case 45:
      return 15;
    case 3:
      return 16;
    case 9:
      return 17;
    case 11:
    case 12:
    case 23:
    case 40:
      return 18;
    case 0:
    case 1:
    case 2:
    case 24:
      return 19;
    case 5:
    case 15:
      return 21;
    case 14:
      return 22;
    case 8:
    case 10:
    case 13:
    case 16:
    case 20:
    case 46:
    case 41:
    case 43:
    case 42:
      return 23;
    case 6:
    case 35:
    case 7:
    case 17:
    case 18:
      return 24;
    case 37:
      return 26;
    case 38:
    case 39:
    case 47:
      return 27;
    default:
      return 45;
  }
}

function getWeatherCondition(code) {
  switch (code) {
    case 0:
      return "Tornado";
    case 1:
      return "Tempestade tropical";
    case 2:
      return "Furacão";
    case 3:
      return "Trovoadas intensas";
    case 4:
    case 45:
      return "Trovoadas";
    case 5:
      return "Chuva e neve";
    case 6:
    case 35:
      return "Chuva e granizo";
    case 7:
      return "Neve e granizo";
    case 8:
      return "Chuviscos congelantes";
    case 9:
      return "Chuvisco";
    case 10:
      return "Chuva congelante";
    case 11:
    case 12:
      return "Chuva";
    case 13:
      return "Rajadas de neve";
    case 14:
      return "Chuvas de neve fracas";
    case 15:
      return "Soprando neve";
    case 16:
      return "Neve";
    case 17:
    case 18:
      return "Granizo";
    case 19:
      return "Poeira";
    case 20:
    case 46:
      return "Nevoeiros";
    case 21:
      return "Neblina";
    case 22:
      return "Esfumaçado";
    case 23:
      return "Tempestuoso";
    case 24:
      return "Ventoso";
    case 25:
      return "Frio";
    case 26:
      return "Nublado";
    case 27:
    case 28:
      return "Parcialmente nublado";
    case 29:
    case 30:
    case 44:
      return "Predominantemente nublado";
    case 31:
    case 33:
    case 34:
      return "Claro";
    case 32:
      return "Ensolarado";
    case 36:
      return "Quente";
    case 37:
      return "Tempestades isoladas";
    case 38:
    case 39:
      return "Tempestades dispersas";
    case 40:
      return "Aguaceiros espalhados";
    case 41:
    case 43:
      return "Neve pesada";
    case 42:
      return "Nevoeiros espalhados";
    case 47:
      return "Trovoadas isoladas";
    default:
      return "Indisponível";
  }
}

module.exports = {
  getCardinalDirection,
  getWeatherConditionIcon,
  getWeatherCondition
}