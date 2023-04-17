import React from "react";
import HeroImage from "./HeroImage";
import { render } from "@testing-library/react";
import useImageUrl from "../hooks/use-imageurl";

jest.mock("../hooks/use-imageurl");

describe("Testing Hero Image Component", () => {
    it("should render the image with the fetched background image", () => {
        (useImageUrl as jest.Mock).mockReturnValue({ src: "http://test-url" });
        render(<HeroImage />);
        const heroImageClass = HeroImage().type.styledComponentId;
        const HeroImageRoots = document.getElementsByClassName(heroImageClass);
        const style = window.getComputedStyle(HeroImageRoots[0]);
        expect(style.backgroundImage).toBe("url(http://test-url)");
    });
});
