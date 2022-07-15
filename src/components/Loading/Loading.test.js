import renderWithTheme from "../../utils/test/renderWithTheme";
import { screen } from "@testing-library/react";
import { Loading } from ".";

describe("<Loading/.>", () => {
  it("should render loading component", () => {
    const { container } = renderWithTheme(<Loading />);
    expect(screen.getByLabelText(/loading/i)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
