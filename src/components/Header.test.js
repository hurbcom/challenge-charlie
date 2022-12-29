import { render } from "@testing-library/react";
import { Header } from "components/Header";

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
