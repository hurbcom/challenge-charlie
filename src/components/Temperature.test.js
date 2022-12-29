import { fireEvent, render, screen } from "@testing-library/react";
import { Temperature } from "components/Temperature";

it("on click", () => {
  render(<Temperature celsius={25} />);
  // eslint-disable-next-line testing-library/no-node-access
  expect(document.body.firstChild.firstChild).toMatchInlineSnapshot(`
    <span
      style="cursor: pointer;"
    >
      25ºC
    </span>
  `);
  fireEvent.click(screen.getByText("25ºC"));
  // eslint-disable-next-line testing-library/no-node-access
  expect(document.body.firstChild.firstChild).toMatchInlineSnapshot(`
    <span
      style="cursor: pointer;"
    >
      77ºF
    </span>
  `);
});
