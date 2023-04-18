import { render } from "@testing-library/react";
import GlobalStylesComposed from ".";

describe("<GlobalStyles />", () => {
    test("renders global css", () => {
        render(<GlobalStylesComposed />);
        expect(document.head).toMatchSnapshot();
    });
});
