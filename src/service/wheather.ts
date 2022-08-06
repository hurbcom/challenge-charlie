import axios from "axios";
import { useMemo } from "react";

class Wheather {    
  
    
    async GetCurrent(local:string,units:string = 'metric', language:string = 'pt_br' ) {
      const key = '772920597e4ec8f00de8d376dfb3f094'
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${local}&APPID=${process.env.NEXT_PUBLIC_OPEN_WHEATHER_MAP_KEY}&units=${units}&lang=${language}`
        const result = await axios
          .get(url)
          .then((i) => {
            return i.data              
            })          
        return result 
      }    
    
    
      async GetForecast(local:string,units:string = 'metric', language:string = 'pt_br' ) {      
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${local}&appid=${process.env.NEXT_PUBLIC_OPEN_WHEATHER_MAP_KEY}&units=${units}&lang=${language}`
        const result = await axios
          .get(url)
          .then((i) => {
            return i.data               
            })          
        return result 
      }    
}
export default Wheather;

export const useWheather = () => {    
    return useMemo(() => new Wheather(), []);
}

