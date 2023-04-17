import useScaleToggle from "./useScaleToggle";
import { act, renderHook } from "@testing-library/react";

describe("Testing the useScaleToggle hook", () => {
    it("should return the temperature with the default scale (C°)", () => {
        const { result } = renderHook(() => useScaleToggle(14));
        expect(result.current.scaledTemperature).toBe("14°C");
    });

    it("should return the temperature with the second available scale (F°) when clicked", () => {
        const { result } = renderHook(() => useScaleToggle(14));

        act(() => {
            result.current.changeScale();
        });
        expect(result.current.scaledTemperature).toBe("57°F");
    });

    it("should return the temperature with the default scale (C°) when clicked again", () => {
        const { result } = renderHook(() => useScaleToggle(14));

        act(() => {
            result.current.changeScale();
        });

        act(() => {
            result.current.changeScale();
        });
        expect(result.current.scaledTemperature).toBe("14°C");
    });
});
