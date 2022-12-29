import { render } from "@testing-library/react";
import { AfterTomorrow } from "components/AfterTomorrow";

it("renders", () => {
  render(
    <AfterTomorrow backgroundColor="#abcdef" temperature="SomeTemperature" />
  );
  // eslint-disable-next-line testing-library/no-node-access
  expect(document.body.firstChild.firstChild).toMatchInlineSnapshot(`
    <div
      class="after-tomorrow"
      style="background-color: rgba(171, 205, 239, 0.867);"
    >
      <div>
        DEPOIS DE AMANHÃ
      </div>
      <div>
        SomeTemperature
      </div>
    </div>
  `);
});
