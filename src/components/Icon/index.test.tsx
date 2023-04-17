import { render, screen } from "@testing-library/react";
import Icon, { IconSizeType } from ".";

const IconSizesMap = {
    small: "12px",
    default: "16px",
    large: "24px",
    xlarge: "32px",
};

describe("<Icon /> component", () => {
    test("renders the <Icon/> component with default size", () => {
        const { asFragment } = render(<Icon name="cloudDay" />);

        expect(asFragment).toMatchSnapshot();
        expect(screen.getByRole("figure")).toHaveStyleRule("font-size", "16px");
    });

    test.each([
        ["small", "12px"],
        ["large", "24px"],
        ["xlarge", "32px"],
    ])("renders the <Icon/> component with %s size", (size, expectedValue) => {
        const component = render(
            <Icon name="cloudDay" size={size as IconSizeType} />
        );

        expect(component.asFragment).toMatchSnapshot();
        expect(screen.getByRole("figure")).toHaveStyleRule(
            "font-size",
            expectedValue
        );
    });
});
