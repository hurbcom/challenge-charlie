import { render } from "@testing-library/react";
import { Tomorrow } from "components/Tomorrow";

it("renders", () => {
  render(<Tomorrow backgroundColor="#abcdef" temperature="SomeTemperature" />);
  // eslint-disable-next-line testing-library/no-node-access
  expect(document.body.firstChild.firstChild).toMatchInlineSnapshot(`
    <div
      class="tomorrow"
      style="background-color: rgba(171, 205, 239, 0.867);"
    >
      <div>
        AMANHÃ
      </div>
      <div>
        SomeTemperature
      </div>
    </div>
  `);
});
