import renderWithTheme from "../../utils/test/renderWithTheme";
import { screen } from "@testing-library/react";
import { WeatherCard } from ".";
import theme from "../../styles/theme";
import userEvent from "@testing-library/user-event";

const mock = {
  temperature: 20,
  wind: 10,
  humidity: 30,
  presure: 40,
  description: "quente",
  label: "hoje",
};

jest.mock("../WeatherIcons", () => {
  return {
    __esModule: true,
    WeatherIcons: () => {
      return <div data-testid="icon"></div>;
    },
  };
});

describe("<Search /.>", () => {
  it("should render props card correctly", () => {
    renderWithTheme(<WeatherCard {...mock} />);

    expect(screen.getByText("hoje")).toBeInTheDocument();
    expect(screen.getByTestId("icon")).toBeInTheDocument();
    expect(screen.getByText("20°C")).toBeInTheDocument();
    expect(screen.getByLabelText("mesures")).toBeInTheDocument();
    expect(screen.getByText("quente")).toBeInTheDocument();
    expect(screen.getByText("Vento: 10km/h")).toBeInTheDocument();
    expect(screen.getByText("Humidade: 30%")).toBeInTheDocument();
    expect(screen.getByText("Pressão: 40poe")).toBeInTheDocument();
  });
  it("should render small card correctly", () => {
    renderWithTheme(<WeatherCard {...mock} smallCard />);

    expect(screen.getByText("20°C")).toBeInTheDocument();
    expect(screen.getByText("hoje")).toBeInTheDocument();
    expect(screen.queryByLabelText("mesures")).not.toBeInTheDocument();
  });
  describe("metric", () => {
    it("should cliked in temperatura change metric unit from celsius or reverse", () => {
      renderWithTheme(<WeatherCard smallCard {...mock} />);

      userEvent.click(screen.getByText("20°C"));
      expect(screen.getByText("68°F")).toBeInTheDocument();
      userEvent.click(screen.getByText("68°F"));
      expect(screen.getByText("20°C")).toBeInTheDocument();
    });
  });
  describe("Colors", () => {
    it("should card with hot color when temp the greater than 35", () => {
      const { container } = renderWithTheme(<WeatherCard temperature={36} />);

      expect(screen.getByText("36°C")).toBeInTheDocument();
      expect(container.firstChild).toHaveStyle({
        background: theme.colors.temperatures.hot,
      });
    });
    it("should card with normal color when temp the greater than 15", () => {
      const { container } = renderWithTheme(<WeatherCard temperature={16} />);

      expect(screen.getByText("16°C")).toBeInTheDocument();
      expect(container.firstChild).toHaveStyle({
        background: theme.colors.temperatures.normal,
      });
    });
    it("should card with cold color when temp the the less 15", () => {
      const { container } = renderWithTheme(<WeatherCard temperature={14} />);

      expect(screen.getByText("14°C")).toBeInTheDocument();
      expect(container.firstChild).toHaveStyle({
        background: theme.colors.temperatures.cold,
      });
    });
    it("should card with gray color when dont have temp", () => {
      const { container } = renderWithTheme(<WeatherCard />);

      expect(container.firstChild).toHaveStyle({
        background: theme.colors.temperatures.null,
      });
    });
  });
});
