import axios from "axios";
import { useMemo } from "react";

class imageBing {       
    async Get( ) {      
        const url = `https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR`
        const cors = 'http://api.allorigins.win/get?url='
        const urlRequest = `${cors}${encodeURIComponent(url)}`;
        const result = await axios
          .get(urlRequest)
          .then((i:IAllOriginResponse) => {
            const imageData: IBingImageResponse = JSON.parse(i.data.contents)
              return `https://www.bing.com/${imageData.images[0].url}`
            })
          .catch((i) => {
            return 'https://www.bing.com/th?id=OHR.HickmanBridge_PT-BR3632714538_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp'
        });       
        return result 
      }    
}
export default imageBing;

export const useImageBing = () => {    
    return useMemo(() => new imageBing(), []);
}

