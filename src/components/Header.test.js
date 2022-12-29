import { fireEvent, render, screen } from "@testing-library/react";
import { Header } from "components/Header";
import { withState } from "react-new-hoc";

it("renders no editing", () => {
  render(<Header cityName="SomeCity" />);
  // eslint-disable-next-line testing-library/no-node-access
  expect(document.body.children[0]).toMatchInlineSnapshot(`
    <div>
      <div
        class="header"
      >
        <span
          class="icon"
          data-icon="("
          style="display: flex;"
        />
        <form
          style="width: 100%;"
        >
          SomeCity
        </form>
      </div>
    </div>
  `);
});

it("renders editing", () => {
  render(<Header cityName="SomeCity" isEditing />);
  // eslint-disable-next-line testing-library/no-node-access
  expect(document.body.children[0]).toMatchInlineSnapshot(`
    <div>
      <div
        class="header"
      >
        <span
          class="icon rotating"
          data-icon="("
          style="display: flex;"
        />
        <form
          style="width: 100%;"
        >
          <input
            value="SomeCity"
          />
        </form>
      </div>
    </div>
  `);
});

it("start editing by icon", () => {
  let isEditing = false;
  const setIsEditing = (cb) => {
    isEditing = cb(isEditing);
  };
  const { container } = render(
    <Header cityName="SomeCity" setIsEditing={setIsEditing} />
  );
  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  fireEvent.click(container.querySelector(".icon"));
  expect(isEditing).toBe(true);
});

it("start editing by cityName", () => {
  let isEditing = false;
  const setIsEditing = (cb) => {
    isEditing = cb(isEditing);
  };
  render(<Header cityName="SomeCity" setIsEditing={setIsEditing} />);
  fireEvent.click(screen.getByText("SomeCity"));
  expect(isEditing).toBe(true);
});

it("on submit", () => {
  const EditingHeader = withState("isEditing", { init: true })(Header);
  const setCityName = jest.fn();
  const { container } = render(
    <EditingHeader cityName="SomeCity" setCityName={setCityName} />
  );
  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  fireEvent.change(container.querySelector("input"), {
    target: { value: "NewCityName" },
  });
  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  fireEvent.submit(container.querySelector("form"));
  expect(setCityName).toHaveBeenCalledWith("NewCityName");
});

it("stop editing when click at icon", () => {
  const EditingHeader = withState("isEditing", { init: true })(Header);
  const setCityName = jest.fn();
  const { container } = render(
    <EditingHeader cityName="SomeCity" setCityName={setCityName} />
  );
  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  fireEvent.change(container.querySelector("input"), {
    target: { value: "NewCityName" },
  });
  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  fireEvent.click(container.querySelector(".icon"));
  expect(setCityName).toHaveBeenCalledWith("NewCityName");
});
