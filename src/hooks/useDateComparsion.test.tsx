import { act, renderHook } from "@testing-library/react-hooks";
import useDateComparsion from "./useDateComparsion";

describe("hooks/useDateComparsion", () => {
    test("is today", () => {
        const date = new Date();
        const { result } = renderHook(() => useDateComparsion());

        expect(result.current.isSameDay(date)).toBeTruthy();
    });

    test("is tomorrow", () => {
        const date = new Date();
        date.setDate(date.getDate() + 1);
        const { result } = renderHook(() => useDateComparsion());

        expect(result.current.isSameDay(date, 1)).toBeTruthy();
    });

    test("is not tomorrow", () => {
        const date = new Date();
        const { result } = renderHook(() => useDateComparsion());

        expect(result.current.isSameDay(date, 1)).toBeFalsy();
    });
});
