import axios from "axios";
import { useMemo } from "react";

class Wheather {    
    
    async GetCurrent(local:string,units:string = 'metric', language:string = 'pt_br' ) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${local}&APPID=772920597e4ec8f00de8d376dfb3f094&units=${units}&lang=${language}`
        const result = await axios
          .get(url)
          .then((i) => {
            return i.data              
            })
          .catch((i) => {        
            console.error(i)
        });
        return result 
      }    
    
    
      async GetForecast(local:string,units:string = 'metric', language:string = 'pt_br' ) {      
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${local}&appid=772920597e4ec8f00de8d376dfb3f094&units=${units}&lang=${language}`
        const result = await axios
          .get(url)
          .then((i) => {
            return i.data               
            })
          .catch((i) => {        
            console.error(i)
        });
        return result 
      }    
}
export default Wheather;

export const useWheather = () => {    
    return useMemo(() => new Wheather(), []);
}

