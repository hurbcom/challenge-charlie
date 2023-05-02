
import useGetUserLocationName from "./useGetUserLocationName";
import { waitFor } from "@testing-library/react";
import getLocationName from "@services/getLocationName";
import { renderHookWithQueryWrapper } from "../../test-utils";

jest.mock("../services/getLocationName");

const mock = {
  latitude: 1,
  longitude: 2,
  isGeolocationLoading: false,
}

describe("Testing the useGetUserLocationName hook", () => {
    it("should query the getLocationName service and return the mocked response", async () => {
        (getLocationName as jest.Mock).mockResolvedValue('cidade, estado')
        const hook = () => useGetUserLocationName(mock.latitude, mock.longitude, mock.isGeolocationLoading);
        const { result } = renderHookWithQueryWrapper(hook);
        await waitFor(() => {
          expect(result.current.data).toBe('cidade, estado');
        })
    });
});
