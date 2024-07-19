import { act } from "react";
import ReactDOM from "react-dom/client";
import App from "../app";

const rootMock = {
  render: jest.fn(),
};

jest.mock("react-dom/client", () => ({
  createRoot: jest.fn(() => rootMock),
}));

describe("Root DOM", () => {
  test("renders App", () => {
    let root = document.createElement("div");
    root.id = "root";
    document.body.append(root);
    act(() => {
      require("../index.tsx");
    });
    expect(ReactDOM.createRoot).toHaveBeenCalledWith(root);
    expect(rootMock.render).toHaveBeenCalledWith(<App />);
  });
});
