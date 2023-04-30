
import useLocationNameByUserLocation from "./useLocationNameByUserLocation";
import { act, renderHook } from "@testing-library/react";

const mock = {
  userLocation: "Maringá",
}

describe("Testing the useLocationNameByUserLocation hook", () => {
    it("should set the location as the given userLocation", async () => {
        const hook = () => useLocationNameByUserLocation(mock.userLocation);
        const { result } = renderHook(hook);
        expect(result.current.location).toBe('Maringá');
        expect(result.current.inputText).toBe('Maringá');
    });

    it("should set the inputText as the value called from setInputText", async () => {
      const hook = () => useLocationNameByUserLocation(mock.userLocation);
      const { result } = renderHook(hook);
      act(() => {
        result.current.setInputText("Libanualnabilesmo")
      })
      expect(result.current.location).toBe('Maringá');
      expect(result.current.inputText).toBe('Libanualnabilesmo');
    });

    it("should set the location as the value of inputText when onBlur is called", async () => {
      const hook = () => useLocationNameByUserLocation(mock.userLocation);
      const { result } = renderHook(hook);
      act(() => {
        result.current.setInputText("Libanualnabilesmo")
      })

      act(() => {
        result.current.onBlur();
      })
      expect(result.current.location).toBe('Libanualnabilesmo');
      expect(result.current.inputText).toBe('Libanualnabilesmo');
    });
});
