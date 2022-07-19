/* eslint-disable no-unused-vars */
import { screen } from "@testing-library/react";
import renderWithTheme from "../../utils/test/renderWithTheme";
import { Home } from ".";
import { ForecastContext } from "../../context/ForecastContext";
import { Loading } from "../../components/Loading";
import { userEvent } from "@storybook/testing-library";

const mocklocation = {
  loaded: false,
  coordinates: { lat: "", lon: "" },
};

jest.mock("../../hooks/useGeoLocation", () => {
  return {
    __esModule: true,
    default: function useGeoLocation() {
      return {
        ...mocklocation,
      };
    },
  };
});

jest.mock("../../components/WeatherCard", () => {
  return {
    __esModule: true,
    WeatherCard: () => {
      return <div data-testid="WeatherCard"></div>;
    },
  };
});

const mockForecast = {
  name: "rio",
  daily: [
    {
      temp: {
        day: 10,
      },
      weather: [{ id: 200 }],
      presure: 10,
      humidity: 10,
      wind: 10,
    },
    {
      temp: {
        day: 20,
      },
      weather: [{ id: 200 }],
      presure: 20,
      humidity: 20,
      wind: 20,
    },
    {
      temp: {
        day: 30,
      },
      weather: [{ id: 200 }],
      presure: 30,
      humidity: 30,
      wind: 30,
    },
  ],
};

const ForecastProps = {
  data: mockForecast,
  currentPlace: { name: "rio" },
};



describe("<Home />", () => {


 
  it("should render home correctly", () => {
    renderWithTheme(
      <ForecastContext.Provider value={{ ...ForecastProps, isLoading: false }}>
        <Home />
      </ForecastContext.Provider>
    );
    expect(screen.getAllByTestId("WeatherCard")).toHaveLength(3);
    expect(screen.getByPlaceholderText("Cidade atual: rio"));
  });

  it("should loading icon", () => {
    renderWithTheme(
      <ForecastContext.Provider value={{ ...ForecastProps, isLoading: true }}>
        <Home />
      </ForecastContext.Provider>
    );
    expect(screen.queryByTestId("WeatherCard")).not.toBeInTheDocument();
    expect(screen.getByLabelText(/loading/i)).toBeInTheDocument();
  });

  it("should show the warning to the user if don't have a city", () => {
    ForecastProps.currentPlace.name = "";
    ForecastProps.data = [];
    renderWithTheme(
      <ForecastContext.Provider value={{ ...ForecastProps }}>
        <Home />
      </ForecastContext.Provider>
    );
    expect(screen.queryByTestId("WeatherCard")).not.toBeInTheDocument();
    expect(
      screen.getByText("pesquiser uma cidade ou habilite a localidade")
    ).toBeInTheDocument();
  });

  it("should call function when has location", () => {
    mocklocation.loaded = true;
    mocklocation.coordinates = { lat: 10, lon: 10 };
    const getForecastByParams = jest.fn();

    renderWithTheme(
      <ForecastContext.Provider
        value={{ ...ForecastProps, getForecastByParams: getForecastByParams }}
      >
        <Home />
      </ForecastContext.Provider>
    );

    expect(getForecastByParams).toBeCalledWith(mocklocation.coordinates);
  });
  it("should not call function when dont has location", () => {
    mocklocation.loaded = false;
    mocklocation.coordinates = {};
    const getForecastByParams = jest.fn();

    renderWithTheme(
      <ForecastContext.Provider
        value={{ ...ForecastProps, getForecastByParams: getForecastByParams }}
      >
        <Home />
      </ForecastContext.Provider>
    );

    expect(getForecastByParams).not.toBeCalled();
  });

  it("should call function when user type in input", () => {
    const getForecastByParams = jest.fn();
    renderWithTheme(
      <ForecastContext.Provider
        value={{ ...ForecastProps, getForecastByParams: getForecastByParams }}
      >
        <Home />
      </ForecastContext.Provider>
    );
    const input = screen.getByPlaceholderText(/Procure sua cidade/i);

    userEvent.type(input, "sao paulo");
    expect(input).toHaveValue("sao paulo");
    userEvent.keyboard("{enter}");
    expect(getForecastByParams).toBeCalledWith({ q: "sao paulo" });
  });
});
