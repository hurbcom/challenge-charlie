import { screen } from "@testing-library/react";
import renderWithTheme from "../../utils/test/renderWithTheme";
import { Home } from ".";
import { ForecastContext } from "../../context/ForecastContext";
import { userEvent } from "@storybook/testing-library";
import { customRender } from "../../utils/test/test-utils";

jest.mock("../../hooks/useFetch", () => {
  return {
    __esModule: true,
    default: function useFetch() {
      return {
        result: {
          url: "foo.png",
          title: "boo is boo",
        },
        fetchUrl: jest.fn(),
      };
    },
  };
});

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

const root = document.createElement("div");
root.setAttribute("id", "notification");

describe("<Home />", () => {
  it("should render home correctly", () => {
    const { container } = renderWithTheme(
      <ForecastContext.Provider value={{ ...ForecastProps, isLoading: false }}>
        <Home />
      </ForecastContext.Provider>
    );
    expect(screen.getAllByTestId("WeatherCard")).toHaveLength(3);
    expect(screen.getByPlaceholderText("Cidade atual: rio"));
    expect(screen.getByText("boo is boo")).toBeInTheDocument();
    expect(container.firstChild).toHaveStyle({ background: "url('foo.png')" });
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
      screen.getByText("pesquise uma cidade ou habilite a localidade")
    ).toBeInTheDocument();
  });

  it("should call the function getForecastByParam when has location", () => {
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

  it("should call the function getForecastByParams when user type 'sao paulo' in input", () => {
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

  it("should call the function getForecastByParams and send the coordinates received by geolocation when button location clicked", () => {
    const getForecastByParams = jest.fn();
    mocklocation.coordinates = { lat: 10, lon: 10 };
    renderWithTheme(
      <ForecastContext.Provider
        value={{ ...ForecastProps, getForecastByParams: getForecastByParams }}
      >
        <Home />
      </ForecastContext.Provider>
    );

    const locationSearch = screen.getByTitle("location").parentElement;
    userEvent.click(locationSearch);

    expect(getForecastByParams).toBeCalledWith(mocklocation.coordinates);
  });

  it("should not call the function getForecastByParams when dont has location", () => {
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

  describe("Notification and alerts", () => {
    it("should show message saying that access location was  not allowed and close notification", () => {
      mocklocation.error = {
        message: "access was not allowed",
      };
      const getForecastByParams = jest.fn();

      customRender(
        <ForecastContext.Provider
          value={{ ...ForecastProps, getForecastByParams: getForecastByParams }}
        >
          <Home />
        </ForecastContext.Provider>,
        {
          container: document.body.appendChild(root),
        }
      );

      const locationSearch = screen.getByTitle("location").parentElement;
      userEvent.click(locationSearch);
      expect(screen.getByText("access was not allowed")).toBeInTheDocument();
      //remove notification
      userEvent.click(screen.getByText("access was not allowed"));
      expect(
        screen.queryByText("access was not allowed")
      ).not.toBeInTheDocument();
    });
  });
});
