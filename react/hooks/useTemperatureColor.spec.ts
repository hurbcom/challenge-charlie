import { TEMPERATURE_COLORS } from "@constants/index";
import useTemperatureColor from "./useTemperatureColor";
import { renderHook } from "@testing-library/react";

describe("Testing the useTemperatureColor hook", () => {
    it("should return the yellow color string in rgba given a temperature in celsius", () => {
        const { result } = renderHook(() => useTemperatureColor(25, 0));
        expect(result.current).toBe(`rgba(${TEMPERATURE_COLORS['yellow']}, var(--max-bg-opacity))`);
    });

    it("should return the color string in rgba with another opacity given another position besides 0", () => {
        const { result } = renderHook(() => useTemperatureColor(25, 1));
        expect(result.current).toBe(`rgba(${TEMPERATURE_COLORS['yellow']}, var(--medium-bg-opacity))`);
    });

    it("should return the blue color string in rgba given a temperature in celsius lesser than 15", () => {
        const { result } = renderHook(() => useTemperatureColor(14, 0));
        expect(result.current).toBe(`rgba(${TEMPERATURE_COLORS['blue']}, var(--max-bg-opacity))`);
    });

    it("should return the red color string in rgba given a temperature in celsius bigger than 35", () => {
        const { result } = renderHook(() => useTemperatureColor(36, 0));
        expect(result.current).toBe(`rgba(${TEMPERATURE_COLORS['red']}, var(--max-bg-opacity))`);
    });
});
