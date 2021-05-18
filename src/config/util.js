

/** 
 * Arquivo para funções globais.
 */

const Util = {
  /**
   * Formata uma string para um determinado objeto.
   * @param {*} str = Olá {name}
   * @param {*} obj = {name:Aquaman}
   * @returns Olá Aquaman.
   */
  formart: (str, obj) => {
    if (!obj) return str;
    return str.replace(
      /\{\s*([^}\s]+)\s*\}/g,
      function (m, p1, offset, string) {
          if(obj[p1]) return obj[p1];
          else return ''
      }
    );
  },
  /**
   * Realiza a conversão de uma cor hex para RGBA
   * @param {*} color "#FF00FF"
   * @param {*} opacity "0.7"
   * @returns rgba(${red}, ${green}, ${blue}, ${opacity}) / false
   */
  convertHexToRGBA: (color, opacity) => {
    if ( color ){ 
      const red = parseInt(color.substring(1, 3), 16);
      const green = parseInt(color.substring(3, 5), 16);
      const blue = parseInt(color.substring(5), 16);
      return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
    }
    return false;
  },
  /**
   * Realiza a conversão de unidade Celsius -> Fahrenheit ou Celsius <- Fahrenheit
   * @param {*} unit Celsius / Fahrenheit
   * @param {*} value Valor dá unidade de conversão
   * @returns { unit: 'celsius', value:'22°C' } // { unit: 'fahrenheit', value:'72°F' }
   */
  convertUnit: (unit, value) =>{
    switch (unit) {
      case 'fahrenheit': return { value: ((parseFloat(value) * 9/5) + 32).toFixed(0) + '°F', unit:'fahrenheit'};
      case 'celsius': return {value:((parseFloat(value) -32) * 5/9).toFixed(0) +'°C', unit:'celsius'} 
      default: return {value:parseFloat(value).toFixed(0)  +'°C', unit:'celsius'};
    }
  },
  /**
   * Faz a verificação pela temperatura para ajustar o background.
   * @param {*} temperature = 23
   * @param {*} day = today, tomorrow e after_tomorrow 
   * @returns { background:"color", keyIcon:"icon", info:"classe", flex:"classe"  }
   */
  getColorToTemperature:(temperature, day)=>{
    let config = { background:"#ffc107", keyIcon:"H", info:"info", flex:"flex", alpha:".7" } // valores default para temperaturas entre (>15 && < 35)
    if(parseInt(temperature) < 15) { config['background'] =  "#2596be"; config['keyIcon'] =  (parseInt(temperature) < 5 ? "W": "R"); }
    else if(parseInt(temperature) > 35){ config['background'] =  "#be2525"; config['keyIcon'] =  "B"; }
    if(day === 'tomorrow') { config['info'] = 'tomorrow'; config['flex'] = 'lightTomorrow';  config['alpha'] = ".8"; }
    else if(day === 'after_tomorrow') { config['info'] = 'afterTomorrow'; config['flex'] = 'darkAfterTomorrow'; config['alpha'] = ".9"; }
    return config;
  }
};

export default Util;
