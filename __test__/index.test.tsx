import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "../src/pages/index";

export const mockNavigatorGeolocation = () => {
  const clearWatchMock = jest.fn();
  const getCurrentPositionMock = jest.fn();
  const watchPositionMock = jest.fn();

  const geolocation = {
    clearWatch: clearWatchMock,
    getCurrentPosition: getCurrentPositionMock,
    watchPosition: watchPositionMock,
  };

  Object.defineProperty(global.navigator, "geolocation", {
    value: geolocation,
    configurable: true,
  });

  return { clearWatchMock, getCurrentPositionMock, watchPositionMock };
};

const { getCurrentPositionMock } = mockNavigatorGeolocation();
getCurrentPositionMock.mockImplementation((success, rejected) =>
  rejected({
    code: "",
    message: "",
    PERMISSION_DENIED: "",
    POSITION_UNAVAILABLE: "",
    TIMEOUT: "",
  })
);

describe("Test if the index page renders correctly", () => {
  it("should render Home page with loading", async () => {
    render(<Home />);

    const loading = screen.getByTestId("loading-component");

    waitFor(() => {
      expect(loading).toBeInTheDocument();
    });
  });

  it("should render Home page with data", async () => {
    render(<Home />);

    const input = screen.getByTestId("input-component");

    waitFor(async () => {
      expect(input).toBeInTheDocument();
      await userEvent.type(input, "São Paulo");
      const currentInfo = screen.getByTestId("current-info-component");
      expect(currentInfo).toBeInTheDocument();
    });
  });
});
