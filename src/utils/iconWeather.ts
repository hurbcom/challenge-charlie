import icon01d from '../../public/climatesFigures/01d.svg'
import icon02d from '../../public/climatesFigures/02d.svg'
import icon03d from '../../public/climatesFigures/03d.svg'
import icon04d from '../../public/climatesFigures/04d.svg'
import icon09d from '../../public/climatesFigures/09d.svg'
import icon10d from '../../public/climatesFigures/10d.svg'
import icon11d from '../../public/climatesFigures/11d.svg'
import icon13d from '../../public/climatesFigures/13d.svg'
import icon50d from '../../public/climatesFigures/50d.svg'
import icon01n from '../../public/climatesFigures/01n.svg'
import icon02n from '../../public/climatesFigures/02n.svg'
import icon03n from '../../public/climatesFigures/03n.svg'
import icon04n from '../../public/climatesFigures/04n.svg'
import icon09n from '../../public/climatesFigures/09n.svg'
import icon10n from '../../public/climatesFigures/10n.svg'
import icon11n from '../../public/climatesFigures/11n.svg'
import icon13n from '../../public/climatesFigures/13n.svg'
import icon50n from '../../public/climatesFigures/50n.svg'
import iconNA from '../../public/na.svg'

export const iconWeather = (iconCode:string) => {
    let image = ''
    switch (iconCode) {        
        case '01d': image = icon01d
        break;
        case '02d': image = icon02d
        break;
        case '03d': image = icon03d
        break;
        case '04d': image = icon04d
        break;
        case '09d': image = icon09d
        break;
        case '10d': image = icon10d
        break;
        case '11d': image = icon11d
        break;
        case '13d': image = icon13d
        break;
        case '50d': image = icon50d
        break;
        case '01n': image = icon01n
        break;
        case '02n': image = icon02n
        break;
        case '03n': image = icon03n
        break;
        case '04n': image = icon04n
        break;
        case '09n': image = icon09n
        break;
        case '10n': image = icon10n
        break;
        case '11n': image = icon11n
        break;
        case '13n': image = icon13n
        break;
        case '50n': image = icon50n
        break;
        default: image = iconNA
        break;             
    }
    return image

}