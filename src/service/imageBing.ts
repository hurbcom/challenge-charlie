import axios from "axios";
import { useMemo } from "react";

class imageBing {       
    async Get( ) {      
        const url = 'https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR'
        const result = await axios
          .get(url)
          .then((i:IBingImageResponse) => {
              return i.data.images.url
            })
          .catch((i) => {          
            console.error("Falha ao coletar dados")
        });
        return result 
      }    
}
export default imageBing;

export const useImageBing = () => {    
    return useMemo(() => new imageBing(), []);
}

