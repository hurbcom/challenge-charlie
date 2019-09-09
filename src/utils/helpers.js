/*
* PX to REM 
* Usage: rem( 16 );
*/
export const rem = ( px ) => `${px / 16}rem`;

/*
* All states of
*/
export const states = [
    { 'uf': 'AC', 'state': 'Acre' },
    { 'uf': 'AL', 'state': 'Alagoas' },
    { 'uf': 'AP', 'state': 'Amapá' },
    { 'uf': 'AM', 'state': 'Amazonas' },
    { 'uf': 'BA', 'state': 'Bahia' },
    { 'uf': 'CE', 'state': 'Ceará' },
    { 'uf': 'DF', 'state': 'Distrito Federal' },
    { 'uf': 'ES', 'state': 'Espírito Santo' },
    { 'uf': 'GO', 'state': 'Goías' },
    { 'uf': 'MA', 'state': 'Maranhão' },
    { 'uf': 'MT', 'state': 'Mato Grosso' },
    { 'uf': 'MS', 'state': 'Mato Grosso do Sul' },
    { 'uf': 'MG', 'state': 'Minas Gerais' },
    { 'uf': 'PA', 'state': 'Pará' },
    { 'uf': 'PB', 'state': 'Paraíba' },
    { 'uf': 'PR', 'state': 'Paraná' },
    { 'uf': 'PE', 'state': 'Pernambuco' },
    { 'uf': 'PI', 'state': 'Piauí' },
    { 'uf': 'RJ', 'state': 'Rio de Janeiro' },
    { 'uf': 'RN', 'state': 'Rio Grande do Norte' },
    { 'uf': 'RS', 'state': 'Rio Grande do Sul' },
    { 'uf': 'RO', 'state': 'Rondônia' },
    { 'uf': 'RR', 'state': 'Roraíma' },
    { 'uf': 'SC', 'state': 'Santa Catarina' },
    { 'uf': 'SP', 'state': 'São Paulo' },
    { 'uf': 'SE', 'state': 'Sergipe' },
    { 'uf': 'TO', 'state': 'Tocantins' },
];

/*
* HEX to RGBA
* Usage: hex2rgba( '#FFFFFF', '0.7' );
*/
export const hex2rgba = ( hex, alpha = 1 ) => {
    const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));
    return `rgba(${r},${g},${b},${alpha})`;
};

/*
* DEG to DIRECTION COMPASS
* Usage: degToCompass( '29' );
*/
export const degToCompass = ( num ) => {
    const val = Math.floor((num / 22.5) + 0.5);
    const arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    return arr[(val % 16)];
}

/*
* ALL Days
*/
export const days = [
    'Hoje', 'Amanhã', 'Depois de Amanhã'
];

/*
* ALL Icons
*/
export const days_icons = {
    '01d': 'B',
    '02d': 'H',
    '03d': 'N',
    '04d': 'Y',
    '09d': 'R',
    '10d': 'R',
    '11d': '0',
    '13d': 'U',
    '50d': 'M',
    '01n': 'B',
    '02n': 'H',
    '03n': 'N',
    '04n': 'Y',
    '09n': 'R',
    '10n': 'R',
    '11n': '0',
    '13n': 'U',
    '50n': 'M',
};

/*
* ALL Colors Variant
*/
export const days_colors = {
    yellow: {
        color1: 'ffb600',
        color2: 'ffda00',
        color3: 'b79403',
    },
    blue: {
        color1: '0000FF',
        color2: '2A52BE',
        color3: '00009C',
    },
    red: {
        color1: 'E34234',
        color2: 'CE1620',
        color3: '800000',
    }
};

/*
* CHECK COLOR BY TEMP
* Usage: checkColorDay( 29 );
*/
export const checkColorDay = ( temp ) => {

    // Define cor padrão
    let color = 'yellow';
    
    // Verifica a temperatura para mudar a cor
    if( temp < 15 ) color = 'blue';
    else if ( temp > 35 ) color = 'red';

    // Retorna array de cores 
    return days_colors[color];
}