export const translate = (word) => {
    
    switch (word) {
        case 'Tue':
            return 'Qer';
        case 'Wed':
            return 'Qua'
        case 'Thu':
            return 'Qui';
        case 'Fri':
            return 'Sex'
        case 'Sat':
            return 'Sab'
        case 'Sun':
            return 'Dom'
        case 'Son':
            return 'Seg'
        case "1":
            return 'Tornado'
        case "2":
            return 'Furação';
        case "3":
        case "38":
        case "39":
            return 'Muitas Trovoadas';
        case "4":
            return 'Trovoadas';
        case "5":
            return 'Neve e Chuva';
        case "6":
        case "35":
            return 'Chuva e Granizo';
        case "7":
            return 'Neve e Granizo';
        case "8":
            return 'Chuvisco';
        case "9":
            return 'Chuvisco';
        case "10":
            return 'Chuva';
        case "11":
            return 'Chuva';
        case "12":
            return 'Chuva';
        case "13":
            return 'Neve';
        case "14":
            return 'Neve';
        case "15":
            return 'Neve';
        case "16":
            return 'Neve';
        case "17":
            return 'Granizo'
        case "18":
            return 'Granizo'
        case "19":
            return 'Vento de Areia'
        case "20":
            return 'Neblina'
        case "21":
            return 'Neblina'
        case "22":
            return 'Nublado'
        case "23":
            return 'ventania'
        case "24":
            return 'ventania'
        case "25":
            return 'frio'
        case "26":
        case "27":
        case "28":
            return 'Nublado'
        case "29":
        case "30":
        case "44":
            return 'Parcialmente Nublado'
        case "31":
        case "32":
        case "33":
        case "34":
            return 'Céu Limpo'
        case "36":
            return 'Clima quente'
        case "37":
        case "47":
            return 'Trovoadas Isoladas'
        case "40":
        case "45":
            return 'Chuva Pesada'
        case "41":
        case "42":
        case '43':
        case '46':
            return 'Neve Pesada'
        default:
        return 'Nao possui traduçao'




    }
}