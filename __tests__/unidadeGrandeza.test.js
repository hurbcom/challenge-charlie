import ConverteUnidadeGrandeza from "../src/client/utils/ConverteUnidadeGrandeza";

let temperaturaCelsius = 40;
let temperaturaFahrenheit = 104;
let miliBar = 1013;
let multiploSubmultiploPascal = ["101.30", "kPa"];

describe("Testa a conversão de grandezas", () => {
    test("Converte Celsius para Fahrenheit", () => {
        const unidadeConvertida = () =>
            ConverteUnidadeGrandeza.converteCelsiusParaFahrenheit(
                temperaturaCelsius
            );

        expect(unidadeConvertida()).toBe(temperaturaFahrenheit);
    });

    test("Converte Fahrenheit para Celsius", () => {
        const unidadeConvertida = () =>
            ConverteUnidadeGrandeza.converteFahrenheitParaCelsius(
                temperaturaFahrenheit
            );

        expect(unidadeConvertida()).toBe(temperaturaCelsius);
    });

    test("Converte miliBar para Pascal", () => {
        const unidadeConvertida = () =>
            ConverteUnidadeGrandeza.converteMiliBarParaPascal(miliBar);

        expect(unidadeConvertida()).toEqual(multiploSubmultiploPascal);
    });
});
