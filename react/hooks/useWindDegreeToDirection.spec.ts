import useWindDegreeToDirection from "./useWindDegreeToDirection";
import { renderHook } from "@testing-library/react";

describe("Testing the useWindDegreeToDirection hook", () => {
    it("should return the N direction if the degrees are < 22.5", () => {
        const { result } = renderHook(() => useWindDegreeToDirection(20));
        expect(result.current).toBe(`N`);
    });

    it("should return the NE direction if the degrees are > 22.5 and < 67.5", () => {
        const { result } = renderHook(() => useWindDegreeToDirection(50));
        expect(result.current).toBe(`NE`);
    });

    it("should return the E direction if the degrees are > 67.5 and < 122.5", () => {
        const { result } = renderHook(() => useWindDegreeToDirection(100));
        expect(result.current).toBe(`E`);
    });

    it("should return the SE direction if the degrees are > 122.5 and < 157.5", () => {
        const { result } = renderHook(() => useWindDegreeToDirection(140));
        expect(result.current).toBe(`SE`);
    });

    it("should return the S direction if the degrees are > 157.5 and < 202.5", () => {
        const { result } = renderHook(() => useWindDegreeToDirection(160));
        expect(result.current).toBe(`S`);
    });

    it("should return the SO direction if the degrees are > 202.5 and < 247.5", () => {
        const { result } = renderHook(() => useWindDegreeToDirection(220));
        expect(result.current).toBe(`SO`);
    });

    it("should return the O direction if the degrees are > 247.5 and < 292.5", () => {
        const { result } = renderHook(() => useWindDegreeToDirection(260));
        expect(result.current).toBe(`O`);
    });

    it("should return the NO direction if the degrees are > 292.5 and < 337.5", () => {
        const { result } = renderHook(() => useWindDegreeToDirection(310));
        expect(result.current).toBe(`NO`);
    });

    it("should return the N direction if the degrees are > 337.5", () => {
        const { result } = renderHook(() => useWindDegreeToDirection(360));
        expect(result.current).toBe(`N`);
    });
});
