import React from "react";
import { render } from "@testing-library/react";

import Input from ".";

describe("components - <Input />", () => {
  it("should render correctly", () => {
    const { container } = render(<Input />);

    expect(container).toMatchInlineSnapshot(`
<div>
  <div
    class="c-gLZkUu"
  >
    <input
      class="c-PJLV"
    />
  </div>
</div>
`);
  });
});
