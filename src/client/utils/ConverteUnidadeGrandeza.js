// Classe utilizada para converter algumas grandezas,
// seus múltiplos e submúltiplos
// Para ficar de acordo com o Sistema Internacional de Unidades(SI)
export default class ConverteUnidadeGrandeza {
    constructor() {}

    converteCelsiusParaFahrenheit(valorCelsius) {
        return (parseInt(valorCelsius) / 5) * 9 + 32;
    }

    converteFahrenheitParaCelsius(valorFahrenheit) {
        return ((parseInt(valorFahrenheit) - 32) / 9) * 5;
    }

    converteMiliBarParaPascal(miliBar) {
        let conversao = parseFloat(miliBar) * 100;
        let retorno = [];

        switch (true) {
            case conversao >= 10 ** 9:
                retorno = [(conversao / 10 ** 6).toFixed(2), "GPa "];
                break;
            case conversao >= 10 ** 6:
                retorno = [(conversao / 10 ** 6).toFixed(2), "MPa"];
                break;
            case conversao >= 10 ** 3:
                retorno = [(conversao / 10 ** 3).toFixed(2), "kPa"];
                break;
            case conversao >= 10 ** 2:
                retorno = [(conversao / 10 ** 2).toFixed(2), "hPa"];
                break;
            case conversao >= 10 ** 1:
                retorno = [(conversao / 10 ** 1).toFixed(2), "daPa"];
                break;
            case conversao >= 10 ** -1:
                retorno = [conversao / 10 ** -1, "dPa"];
                break;
            case conversao >= 10 ** -2:
                retorno = [conversao / 10 ** -2, "cPa"];
                break;
            case conversao >= 10 ** -3:
                retorno = [conversao / 10 ** -3, "mPa"];
                break;
            case conversao >= 10 ** -6:
                retorno = [conversao / 10 ** -6, "µPa"];
                break;
            default:
                retorno = [conversao, "N/A"];
        }
        return retorno;
    }
}
