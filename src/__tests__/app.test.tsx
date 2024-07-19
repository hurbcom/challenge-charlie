import { act, render, screen } from "@testing-library/react";
import App from "../app";

test("renders app component", () => {
  act(() => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
  expect(screen.getByRole("main")).toBeInTheDocument();
});
