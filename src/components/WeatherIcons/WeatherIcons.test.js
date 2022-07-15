import renderWithTheme from "../../utils/test/renderWithTheme";
import { screen } from "@testing-library/react";
import { WeatherIcons } from ".";

const cases = [
  [200, "Thunderstorm"],
  [300, "Drizzle"],
  [500, "Rain"],
  [600, "Snow"],
  [701, "mist"],
  [800, "Clear"],
  [801, "Clouds"],
];

describe("<WeatherIcons />", () => {
  it.each(cases)(
    "should rende icon %p with %p as title",
    (firstArg, secondArg) => {
      renderWithTheme(<WeatherIcons code={firstArg} label={secondArg} />);
      expect(screen.getByTitle(secondArg)).toBeInTheDocument();
    }
  );
});
