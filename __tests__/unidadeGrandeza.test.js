import ConverteUnidadeGrandeza from "../src/client/utils/ConverteUnidadeGrandeza";

let converteUnidadeGrandeza = new ConverteUnidadeGrandeza();

let temperaturaCelsius = 40;
let temperaturaFahrenheit = 104;
let miliBar = 1013;
let multiploSubmultiploPascal = ["101.30", "kPa"];

it("Converte Celsius para Fahrenheit", () => {
    const unidadeConvertida = () =>
        converteUnidadeGrandeza.converteCelsiusParaFahrenheit(
            temperaturaCelsius
        );

    expect(unidadeConvertida()).toBe(temperaturaFahrenheit);
});

it("Converte Fahrenheit para Celsius", () => {
    const unidadeConvertida = () =>
        converteUnidadeGrandeza.converteFahrenheitParaCelsius(
            temperaturaFahrenheit
        );

    expect(unidadeConvertida()).toBe(temperaturaCelsius);
});

it("Converte miliBar para Pascal", () => {
    const unidadeConvertida = () =>
        converteUnidadeGrandeza.converteMiliBarParaPascal(miliBar);

    expect(unidadeConvertida()).toEqual(multiploSubmultiploPascal);
});
