/* eslint-disable react/prop-types */
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";

const AllTheProviders = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};


export const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });
