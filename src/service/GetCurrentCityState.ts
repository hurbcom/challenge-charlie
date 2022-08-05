import axios from "axios";
import { useMemo } from "react";

class currentCityState {       
    async Get(lat:number,long:number ) {      
        const url = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${long}&key=c63386b4f77e46de817bdf94f552cddf&language=en`
        const result = await axios
          .get(url)
          .then((i:IOpenCageDataResponse) => {
            const descriptions = i.data.results[0].components  
            return `${descriptions.municipality}, ${descriptions.state}`            
            })         
        return result 
      }    
}
export default currentCityState;

export const GetCurrentCityState = () => {    
    return useMemo(() => new currentCityState(), []);
}

