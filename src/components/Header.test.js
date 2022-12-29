import { render } from "@testing-library/react";
import { Header } from "components/Header";

it("renders", () => {
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
        />
        <span
          style="margin-bottom: 15px;"
        >
          SomeCity
        </span>
      </div>
    </div>
  `);
});
