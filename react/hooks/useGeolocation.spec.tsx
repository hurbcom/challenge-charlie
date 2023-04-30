import useGeolocation from "./useGeolocation";
import {  waitFor } from "@testing-library/react";
import { renderHookWithQueryWrapper } from '../../test-utils';

describe("Testing the useGeolocation hook", () => {
    it("should query the navigator.geolocation api and return the mocked response", async () => {
        const { result } = renderHookWithQueryWrapper(() => useGeolocation());
        await waitFor(() => {
          expect(result.current.data?.accuracy).toBe('test');
        })
    });
});
