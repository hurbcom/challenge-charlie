import { GeolocationService } from "../services/GeolocationService";

describe("GeolocationService", () => {
    //test GeolocationService.getLocation()
    it("it should return forecast successfully from lat and lng", async () => {
        process.env.REACT_APP_OPEN_WEATHER_MAP_URL =
            "https://api.openweathermap.org/data/2.5";

        process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY =
            "a29cdb9283ab971b4ba908a8aa90601c";

        let response;
        try {
            response = await GeolocationService.getForecastFromLatAndLng(
                -22.2310664,
                -42.5284592
            );

            expect(response?.timezone).toBe("America/Sao_Paulo");
        } catch (e) {
            console.log("e", e);
        }
    });

    //test GeolocationService.getWeatherFromCity()
    it("it should return current weather of specific city", async () => {
        process.env.REACT_APP_OPEN_WEATHER_MAP_URL =
            "https://api.openweathermap.org/data/2.5";
        process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY =
            "a29cdb9283ab971b4ba908a8aa90601c";

        let response;
        try {
            response = await GeolocationService.getWeatherFromCity(
                "nova+friburgo"
            );

            expect(response?.sys.country).toBe("BR");
            expect(typeof response?.main.temp).toBe("number");
        } catch (e) {
            console.log("e", e);
        }
    });

    //test GeolocationService.getWeatherFromLatAndLng()
    it("it should return current weather of specific lat and lng", async () => {
        process.env.REACT_APP_OPEN_WEATHER_MAP_URL =
            "https://api.openweathermap.org/data/2.5";
        process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY =
            "a29cdb9283ab971b4ba908a8aa90601c";

        let response;
        try {
            response = await GeolocationService.getWeatherFromLatAndLng(
                -22.2310664,
                -42.5284592
            );

            expect(response?.sys.country).toBe("BR");
            expect(typeof response?.main.temp).toBe("number");
        } catch (e) {
            console.log("e", e);
        }
    });
});
