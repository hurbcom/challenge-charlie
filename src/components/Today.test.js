import { render } from "@testing-library/react";
import { Today } from "components/Today";

it("renders", () => {
  render(
    <Today
      temperature="SomeTemperature"
      kind="SomeKind"
      wind="SomeWind"
      humidity="SomeHumidity"
      pressure="SomePressure"
    />
  );
  // eslint-disable-next-line testing-library/no-node-access
  expect(document.body.children[0]).toMatchInlineSnapshot(`
    <div>
      <div
        class="today"
      >
        <div
          style="overflow: hidden;"
        >
          <span
            class="icon"
            data-icon="B"
          />
        </div>
        <div
          class="info"
        >
          <div
            style="font-weight: bold;"
          >
            HOJE
          </div>
          <div
            style="font-weight: bold;"
          >
            SomeTemperature
          </div>
          <div
            style="height: 50px;"
          />
          <div>
            SomeKind
          </div>
          <div>
            Vento:
            SomeWind
          </div>
          <div>
            Humidade:
            SomeHumidity
          </div>
          <div>
            Pressão:
            SomePressure
          </div>
        </div>
      </div>
    </div>
  `);
});
