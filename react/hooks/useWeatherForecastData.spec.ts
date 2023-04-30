
import useWeatherForecastData from "./useWeatherForecastData";
import { waitFor } from "@testing-library/react";
import getForecast from "@services/getForecast";
import { renderHookWithQueryWrapper } from "../../test-utils";

jest.mock("../services/getForecast");

const mockWeatherData = [{"day": "HOJE", "main": {"humidity": 0, "pressure": 0, "temp": 0}, "weather": [{"description": "", "icon": ""}], "wind": {"deg": 0, "speed": 0}}, {"day": "AMANHÃ", "main": {"humidity": 0, "pressure": 0, "temp": 0}, "weather": [{"description": "", "icon": ""}], "wind": {"deg": 0, "speed": 0}}, {"day": "DEPOIS DE AMANHÃ", "main": {"humidity": 0, "pressure": 0, "temp": 0}, "weather": [{"description": "", "icon": ""}], "wind": {"deg": 0, "speed": 0}}]

const mock = {
    location: "Turquia, São João de Meriti",
}

describe("Testing the useWeatherForecastData hook", () => {
    it("should query the getForecast service and return the mocked response", async () => {
        (getForecast as jest.Mock).mockResolvedValue(mockWeatherData)
        const hook = () => useWeatherForecastData(mock.location);
        const { result } = renderHookWithQueryWrapper(hook);
        await waitFor(() => {
          expect(result.current.data).toEqual(mockWeatherData);
        })
    });
});
