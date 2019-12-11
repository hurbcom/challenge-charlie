import { 
    getDay,
    getClassName,
    celciusToFarenheit,
    farenheitToCelcius
} from '../utils'
import moment from 'moment'

it('should return Today in function getDay', () => {
    expect(getDay(moment())).toBe('Today');
});

it('should return Tommorrow in function getDay', () => {
    expect(getDay(moment().add(1, 'days'))).toBe('Tommorrow');
});

it('should return After Tommorrow in function getDay', () => {
    expect(getDay(moment().add(2, 'days'))).toBe('After Tommorrow');
});

it('should return temperature-cold-light in function getClassName', () => {
    expect(getClassName(10)).toBe('temperature-cold-light');
});

it('should return 75 in function celciusToFarenheit', () => {
    expect(parseInt(celciusToFarenheit(24))).toBe(75);
});

it('should return 24 in function farenheitToCelcius', () => {
    expect(Math.round(farenheitToCelcius(75))).toBe(24);
});