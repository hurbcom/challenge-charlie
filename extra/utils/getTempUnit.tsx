//I18N
import intl from "react-intl-universal";

export const getTempUnit = (temp: string) => {
    if(temp === 'c'){
        return intl.get('celsius')
    }
    else{
        return intl.get('fahrenheit')
    }
}