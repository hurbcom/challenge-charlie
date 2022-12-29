import { render } from "@testing-library/react";
import { Tomorrow } from "components/Tomorrow";

it("renders", () => {
  render(<Tomorrow temperature="SomeTemperature" />);
  // eslint-disable-next-line testing-library/no-node-access
  expect(document.body.children[0]).toMatchInlineSnapshot(`
    <div>
      <div
        class="tomorrow"
      >
        <div>
          AMANHÃ
        </div>
        <div>
          SomeTemperature
        </div>
      </div>
    </div>
  `);
});
