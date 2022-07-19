import renderWithTheme from "../../utils/test/renderWithTheme";
import { screen } from "@testing-library/react";
import { Search } from ".";
import userEvent from "@testing-library/user-event";

describe("<Search /.>", () => {
  it("should render the component with initial states", () => {
    renderWithTheme(<Search />);
    expect(
      screen.getByPlaceholderText(/procure sua cidade/i)
    ).toBeInTheDocument();
  });
  it("should show error in screen", () => {
    renderWithTheme(<Search error="city not found" />);
    expect(screen.getByText(/city not found/i)).toBeInTheDocument();
  });
  it("should show city when has", () => {
    renderWithTheme(<Search city="rio" />);
    expect(screen.getByPlaceholderText(/rio/i)).toBeInTheDocument();
  });
  it("should type in input and submit value", () => {
    const onSubmit = jest.fn();
    renderWithTheme(<Search city="rio" onSubmit={onSubmit} />);
    const input = screen.getByPlaceholderText(/rio/i);

    userEvent.type(input, "sao paulo");
    expect(input).toHaveValue("sao paulo");
    userEvent.keyboard("{enter}");
    expect(onSubmit).toBeCalledWith("sao paulo");
  });
  it("should input empty not submit value", () => {
    const onSubmit = jest.fn();
    renderWithTheme(<Search city="rio" onSubmit={onSubmit} />);
    const input = screen.getByPlaceholderText(/rio/i);

    userEvent.type(input, "sao paulo");

    input.setSelectionRange(0, 9);
    userEvent.type(input, "{backspace}");
    userEvent.keyboard("{enter}");
    expect(onSubmit).not.toBeCalled();
  });
  it("should call function when search button is cliked", () => {
    const onSubmit = jest.fn();
    renderWithTheme(<Search city="rio" onSubmit={onSubmit} />);

    const buttonSearch = screen.getByTitle("search").parentElement;
    const input = screen.getByPlaceholderText(/rio/i);

    userEvent.type(input, "sao paulo");
    expect(input).toHaveValue("sao paulo");

    userEvent.click(buttonSearch);
    expect(onSubmit).toBeCalledWith("sao paulo");
  });
  it("should call function when location button is cliked", () => {
    const setLocation = jest.fn();
    renderWithTheme(<Search city="rio" onSetCoordinates={setLocation} />);

    const locationSearch = screen.getByTitle("location").parentElement;

    userEvent.click(locationSearch);
    expect(setLocation).toBeCalled();
  });
});
