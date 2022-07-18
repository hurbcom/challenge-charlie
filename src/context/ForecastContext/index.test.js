/* eslint-disable react/prop-types */
import {
  screen,
  waitForElementToBeRemoved,
  waitFor,
} from "@testing-library/dom";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ForecastContext, ForecastProvider } from ".";
import { getWeather } from "../../services/api";
import { act } from "react-dom/test-utils";

jest.mock("../../services/api");

let store = {};
const fakeLocalStorage = (function () {
  return {
    getItem: function (key) {
      return store[key] || null;
    },
    setItem: function (key, value) {
      store[key] = value.toString();
    },
    removeItem: function (key) {
      delete store[key];
    },
    clear: function () {
      store = {};
    },
  };
})();

describe("ForecastProvider", () => {
  beforeAll(() => {
    Object.defineProperty(window, "localStorage", {
      value: fakeLocalStorage,
    });
  });

  beforeEach(() => {
    store = {};
  });

  it("should call function and recived date", async () => {
    getWeather.mockResolvedValueOnce({
      name: "Vitória",
    });

    render(
      <ForecastProvider>
        <ForecastContext.Consumer>
          {({ getForecastByParams, data, error, sucess }) => (
            <>
              {!data.name && <span>Loading...</span>}
              {sucess && <span>sucess</span>}
              {sucess && <span>{data.name}</span>}
              {error && <span>{error}</span>}
              <button
                onClick={() => getForecastByParams("rio")}
                data-testid="btn"
              />
            </>
          )}
        </ForecastContext.Consumer>
      </ForecastProvider>
    );

    userEvent.click(screen.getByTestId("btn"));
    expect(getWeather).toBeCalledWith("rio");
    await waitForElementToBeRemoved(() => screen.queryByText("Loading..."));
    await waitFor(() => {
      expect(screen.queryByText("Vitória")).toBeInTheDocument();
      expect(screen.queryByText("sucess")).toBeInTheDocument();
    });
  });

  it("should show error message", async () => {
    getWeather.mockRejectedValueOnce(new Error("city not found"));
    render(
      <ForecastProvider>
        <ForecastContext.Consumer>
          {({ error, getForecastByParams }) => (
            <>
              <span> {error} </span>
              <button
                onClick={() => getForecastByParams("foo")}
                data-testid="btn"
              />
            </>
          )}
        </ForecastContext.Consumer>
      </ForecastProvider>
    );

    userEvent.click(screen.getByTestId("btn"));
    await waitFor(() => {
      expect(screen.queryByText("city not found")).toBeInTheDocument();
    });
  });

  it("should return current city", async () => {
    getWeather.mockResolvedValueOnce({
      name: "campos",
    });

    act(() => {
      render(
        <ForecastProvider>
          <ForecastContext.Consumer>
            {({ getForecastByParams, currentPlace }) => (
              <>
                {currentPlace && <span> {currentPlace.name} </span>}
                <button
                  onClick={() => getForecastByParams("foo")}
                  data-testid="btn"
                />
              </>
            )}
          </ForecastContext.Consumer>
        </ForecastProvider>
      );
    });
    act(() => {
      userEvent.click(screen.getByTestId("btn"));
    });
    await waitFor(() => {
      expect(screen.queryByText("campos")).toBeInTheDocument();
    });
  });

  describe("localStorage", () => {
    it("should call function when currrent city has in localstorege", async () => {
      store = {
        currentPlace: '{"name":"foo"}',
      };

      getWeather.mockResolvedValueOnce({
        name: "foo",
      });

      await act(async () => {
        render(
          <ForecastProvider>
            <ForecastContext.Consumer>
              {({ currentPlace }) => (
                <>{currentPlace && <span>{currentPlace.name}</span>}</>
              )}
            </ForecastContext.Consumer>
          </ForecastProvider>
        );
      });

      expect(getWeather).toBeCalledWith({ q: "foo" });
      
      await waitFor(() => {
        expect(screen.queryByText("foo")).toBeInTheDocument();
      });
    });
    it("should not call function when currrent city don't has in localstorege", async () => {
      store = {};

      await act(async () => {
        render(
          <ForecastProvider>
            <ForecastContext.Consumer>
              {({ data }) => <>{!data.name && <span>no has city</span>}</>}
            </ForecastContext.Consumer>
          </ForecastProvider>
        );
      });

      expect(getWeather).not.toBeCalled();

      await waitFor(() => {
        expect(screen.queryByText("no has city")).toBeInTheDocument();
      });
    });
  });
});
