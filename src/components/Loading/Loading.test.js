import renderWithTheme from "../../utils/test/renderWithTheme";
import { screen } from "@testing-library/react";
import { Loading } from ".";

describe("<Loading/.>", () => {
  it("should render loading component", () => {
    const { container } = renderWithTheme(<Loading />);
    expect(screen.getByLabelText(/loading/i)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
  it("should have height 300px ", () => {
    const { container } = renderWithTheme(<Loading height={300} />);

    expect(container.firstChild).toHaveStyle({ height: "300px" });
  });
});
