import {
    toFahrenheit,
    getTranslatedWeather,
    getDirection,
    getWeatherColor,
    getWeatherIcon
} from "../weather";

import colors from "../../styles/colors";

describe("Converting to Fahrenheit", () => {
    it("Should convert correctly to Fahrenheit", () => {
        expect(toFahrenheit(0)).toBe(32);
        expect(toFahrenheit(1)).toBe(33.8);
        expect(toFahrenheit(5)).toBe(41);
    });
});

describe("Get translated weather", () => {
    it("returns the right translated weather", () => {
        expect(getTranslatedWeather("clear")).toBe("Ensolarado");
        expect(getTranslatedWeather("clouds")).toBe("Nuvens");
        expect(getTranslatedWeather("thunderstorm")).toBe("Tempestade");
        expect(getTranslatedWeather("snow")).toBe("Neve");
        expect(getTranslatedWeather("mist")).toBe("Nevoeiro");
        expect(getTranslatedWeather("rain")).toBe("Chuva");
        expect(getTranslatedWeather("drizzle")).toBe("Chuvisco");
    });

    it("returns -- when receives undefined weather", () => {
        expect(getTranslatedWeather()).toBe("--");
    });

    it("returns -- when doesn`t find translation", () => {
        expect(getTranslatedWeather("ubaduba")).toBe("--");
    });
});

describe("Get direction", () => {
    it("should return the right direction", () => {
        expect(getDirection(0)).toBe("Norte");
        expect(getDirection(45)).toBe("Nordeste");
        expect(getDirection(90)).toBe("Leste");
        expect(getDirection(135)).toBe("Sudeste");
        expect(getDirection(180)).toBe("Sul");
        expect(getDirection(225)).toBe("Sudoeste");
        expect(getDirection(270)).toBe("Oeste");
        expect(getDirection(315)).toBe("Nordeste");
    });

    it("returns -- when heading is undefined", () => {
        expect(getDirection()).toBe("--");
    });
});

describe("Get weather color", () => {
    it("should return the right color", () => {
        expect(getWeatherColor(10)).toBe(colors["blue"]["normal"] + "ff");
        expect(getWeatherColor(30)).toBe(colors["yellow"]["normal"] + "ff");
        expect(getWeatherColor(50)).toBe(colors["red"]["normal"] + "ff");
    });

    it("should return the right color with tone", () => {
        expect(getWeatherColor(10, "darkest")).toBe(
            colors["blue"]["darkest"] + "ff"
        );
    });

    it("should return the color with opacity", () => {
        expect(getWeatherColor(10, "normal", 0.5)).toBe(
            colors["blue"]["normal"] + "7f"
        );
    });

    it("returns gray when the temperature is undefined", () => {
        expect(getWeatherColor()).toBe(colors["gray"]["normal"] + "ff");
    });
});

describe("Get weather icon", () => {
    it("should find and return the right icon asset", () => {
        expect(getWeatherIcon("clear")).toBe(
            require("../../assets/icons/clear.svg")
        );
        expect(getWeatherIcon("clouds")).toBe(
            require("../../assets/icons/clouds.svg")
        );
        expect(getWeatherIcon("thunderstorm")).toBe(
            require("../../assets/icons/thunderstorm.svg")
        );
        expect(getWeatherIcon("snow")).toBe(
            require("../../assets/icons/snow.svg")
        );
        expect(getWeatherIcon("mist")).toBe(
            require("../../assets/icons/snow.svg")
        );
        expect(getWeatherIcon("rain")).toBe(
            require("../../assets/icons/rain.svg")
        );
        expect(getWeatherIcon("drizzle")).toBe(
            require("../../assets/icons/drizzle.svg")
        );
    });
});
