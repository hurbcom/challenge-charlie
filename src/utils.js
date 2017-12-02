const translateCondition = {
  '0':  'tornado',                       // tornado
  '1':  'tempestade tropical',           // tropical storm
  '2':  'furacão',                       // hurricane
  '3':  'tempestade severa',             // severe thunderstorms
  '4':  'trovoadas',                     // thunderstorms
  '5':  'chuva e neve',                  // mixed rain and snow
  '6':  'chuva e granizo fino',          // mixed rain and sleet
  '7':  'neve e granizo fino',           // mixed snow and sleet
  '8':  'garoa gélida',                  // freezing drizzle
  '9':  'garoa',                         // drizzle
  '10': 'chuva gélida',                  // freezing rain
  '11': 'chuvisco',                      // showers
  '12': 'chuva',                         // showers
  '13': 'neve em flocos finos',          // snow flurries
  '14': 'leve precipitação de neve',     // light snow showers
  '15': 'ventos com neve',               // blowing snow
  '16': 'neve',                          // snow
  '17': 'chuva de granizo',              // hail
  '18': 'pouco granizo',                 // sleet
  '19': 'pó em suspensão',               // dust
  '20': 'neblina',                       // foggy
  '21': 'névoa seca',                    // haze
  '22': 'enfumaçado',                    // smoky
  '23': 'vendaval',                      // blustery
  '24': 'ventando',                      // windy
  '25': 'frio',                          // cold
  '26': 'nublado',                       // cloudy
  '27': 'muitas nuvens (noite)',         // mostly cloudy (night)
  '28': 'muitas nuvens (dia)',           // mostly cloudy (day)
  '29': 'parcialmente nublado (noite)',  // partly cloudy (night)
  '30': 'parcialmente nublado (dia)',    // partly cloudy (day)
  '31': 'céu limpo (noite)',             // clear (night)
  '32': 'ensolarado',                    // sunny
  '33': 'tempo bom (noite)',             // fair (night)
  '34': 'tempo bom (dia)',               // fair (day)
  '35': 'chuva e granizo',               // mixed rain and hail
  '36': 'quente',                        // hot
  '37': 'tempestades isoladas',          // isolated thunderstorms
  '38': 'tempestades esparsas',          // scattered thunderstorms
  '39': 'tempestades esparsas',          // scattered thunderstorms
  '40': 'chuvas esparsas',               // scattered showers
  '41': 'nevasca',                       // heavy snow
  '42': 'tempestades de neve esparsas',  // scattered snow showers
  '43': 'nevasca',                       // heavy snow
  '44': 'parcialmente nublado',          // partly cloudy
  '45': 'chuva com trovoadas',           // thundershowers
  '46': 'tempestade de neve',            // snow showers
  '47': 'relâmpagos e chuvas isoladas',  // isolated thundershowers
  '3200': 'não disponível'               // not available
}

const convertTemperature = (temp, type) => {
  switch (type) {
    case 'c':
      return (temp - 32) / 1.8;
    case 'f':
      return temp * 1.8 + 32;
    default:
      return temp
  }
}

export default {translateCondition, convertTemperature}