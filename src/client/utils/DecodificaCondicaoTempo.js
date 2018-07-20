export default class DecodificaCondicaoTempo {
    constructor() {}

    decodificaCondicaoTempo(code) {
        let retorno = [];

        switch (code) {
            case "0":
                retorno = ["Tornado", ")"];
                break;
            case "1":
                retorno = ["Tempestade tropical", ")"];
                break;
            case "2":
                retorno = ["Furacão", ")"];
                break;
            case "3":
                retorno = ["Tempestade severa", "R"];
                break;
            case "4":
                retorno = ["Trovoadas", "P"];
                break;
            case "5":
                retorno = ["Chuva e neve", ")"];
                break;
            case "6":
                retorno = ["Chuva e granizo fino", "X"];
                break;
            case "7":
                retorno = ["Neve e granizo fino", "U"];
                break;
            case "8":
                retorno = ["Garoa gélida", "Q"];
                break;
            case "9":
                retorno = ["Garoa", "Q"];
                break;
            case "10":
                retorno = ["Chuva gélida", "Q"];
                break;
            case "11":
                retorno = ["Chuvisco", "Q"];
                break;
            case "12":
                retorno = ["Chuva", "R"];
                break;
            case "13":
                retorno = ["Neve em flocos finos", "U"];
                break;
            case "14":
                retorno = ["Leve precipitação de neve", "X"];
                break;
            case "15":
                retorno = ["Ventos com neve", "X"];
                break;
            case "16":
                retorno = ["Neve", "V"];
                break;
            case "17":
                retorno = ["Chuva de granizo", "R"];
                break;
            case "18":
                retorno = ["Pouco granizo", "Q"];
                break;
            case "19":
                retorno = ["Pó em suspensão", "S"];
                break;
            case "20":
                retorno = ["Neblina", "M"];
                break;
            case "21":
                retorno = ["Névoa seca", "M"];
                break;
            case "22":
                retorno = ["Enfumaçado", "M"];
                break;
            case "23":
                retorno = ["Vendaval", "F"];
                break;
            case "24":
                retorno = ["Ventando", "S"];
                break;
            case "25":
                retorno = ["Frio", "G"];
                break;
            case "26":
                retorno = ["Nublado", "M"];
                break;
            case "27":
                retorno = ["Muitas nuvens (noite)", "I"];
                break;
            case "28":
                retorno = ["Muitas nuvens (dia)", "H"];
                break;
            case "29":
                retorno = ["Parcialmente nublado (noite)", "I"];
                break;
            case "30":
                retorno = ["Parcialmente nublado (dia)", "H"];
                break;
            case "31":
                retorno = ["Céu limpo (noite)", "C"];
                break;
            case "32":
                retorno = ["Ensolarado", "B"];
                break;
            case "33":
                retorno = ["Tempo bom (noite)", "C"];
                break;
            case "34":
                retorno = ["Tempo bom (dia)", "B"];
                break;
            case "35":
                retorno = ["Chuva e granizo", "R"];
                break;
            case "36":
                retorno = ["Quente", "B"];
                break;
            case "37":
                retorno = ["Tempestades isoladas", "0"];
                break;
            case "38":
                retorno = ["Tempestades esparsas", "T"];
                break;
            case "39":
                retorno = ["Tempestades esparsas", "T"];
                break;
            case "40":
                retorno = ["Chuvas esparsas", "Q"];
                break;
            case "41":
                retorno = ["Nevasca", "W"];
                break;
            case "42":
                retorno = ["Tempestades de neve esparsas", "X"];
                break;
            case "43":
                retorno = ["Nevasca", "W"];
                break;
            case "44":
                retorno = ["Parcialmente nublado", "Y"];
                break;
            case "45":
                retorno = ["Chuva com trovoadas", "Z"];
                break;
            case "46":
                retorno = ["Tempestade de neve", "W"];
                break;
            case "47":
                retorno = ["Relâmpagos e chuvas isoladas", "Z"];
                break;
            case "3200":
                retorno = ["Não disponível", "N"];
                break;
            default:
                retorno = ["Não disponível", "N"];
                break;
        }

        return retorno;
    }
}
