import { render } from "@testing-library/react";
import { AfterTomorrow } from "components/AfterTomorrow";

it("renders", () => {
  render(<AfterTomorrow temperature="SomeTemperature" />);
  // eslint-disable-next-line testing-library/no-node-access
  expect(document.body.children[0]).toMatchInlineSnapshot(`
    <div>
      <div
        class="after-tomorrow"
      >
        <div>
          DEPOIS DE AMANHÃ
        </div>
        <div>
          SomeTemperature
        </div>
      </div>
    </div>
  `);
});
