import { screen } from "@testing-library/react";
import { renderWithClient } from "../__utils__/renderWithClient";
import WeatherDetails from "../components/WeatherDetails";
import { WeatherProvider } from "../contexts/WeatherProvider";
import colorsShadeDictonary from "../helpers/ColorsShadeDictonary";
import queryClient from "../queries/QueryClient";

test("renders icon when showIcon is true", () => {
  renderWithClient(
    queryClient,
    <WeatherProvider>
      <WeatherDetails
        showIcon={true}
        isLoading={false}
        showDetails={false}
        weather={{
          weatherId: 200,
          temp: 25,
          description: "sunny",
          humidity: "20",
          pressure: "30",
          unit: "°C",
          wind: "30",
        }}
        description="HOJE"
        colors={colorsShadeDictonary[0]}
      />
    </WeatherProvider>
  );

  const icon = screen.getByTestId("icon");
  expect(icon).toBeInTheDocument();
});

test("do not renders icon when showIcon is false", () => {
  renderWithClient(
    queryClient,
    <WeatherProvider>
      <WeatherDetails
        showIcon={false}
        isLoading={false}
        showDetails={false}
        weather={{
          weatherId: 200,
          temp: 25,
          description: "sunny",
          humidity: "20",
          pressure: "30",
          unit: "°C",
          wind: "30",
        }}
        description="HOJE"
        colors={colorsShadeDictonary[0]}
      />
    </WeatherProvider>
  );

  const icon = screen.queryByTestId("icon");
  expect(icon).toBeNull();
});

test("do not renders icon when weather is undefined", () => {
  renderWithClient(
    queryClient,
    <WeatherProvider>
      <WeatherDetails
        showIcon={false}
        isLoading={false}
        showDetails={false}
        weather={undefined}
        description="HOJE"
        colors={colorsShadeDictonary[0]}
      />
    </WeatherProvider>
  );

  const icon = screen.queryByTestId("icon");
  expect(icon).toBeNull();
});

test("renders icon skeleton when isLoading is true", () => {
  renderWithClient(
    queryClient,
    <WeatherProvider>
      <WeatherDetails
        showIcon={true}
        isLoading={true}
        showDetails={false}
        weather={{
          weatherId: 200,
          temp: 25,
          description: "sunny",
          humidity: "20",
          pressure: "30",
          unit: "°C",
          wind: "30",
        }}
        description="HOJE"
        colors={colorsShadeDictonary[0]}
      />
    </WeatherProvider>
  );

  const icon = screen.getByTestId("icon-skeleton");
  expect(icon).toBeInTheDocument();
});
