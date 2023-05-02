import React from "react";
import HeroImage from ".";
import { render } from "@testing-library/react";
import useImageUrl from "@hooks/useImageurl";

jest.mock("../../hooks/useImageurl");

describe("Testing Hero Image Component", () => {
    it("should render the image with the fetched background image", () => {
        (useImageUrl as jest.Mock).mockReturnValue({ src: "http://test-url" });
        render(<HeroImage />);
        const heroImageClass = HeroImage().type.styledComponentId;
        const HeroImageRoots = document.getElementsByClassName(heroImageClass);
        const style = window.getComputedStyle(HeroImageRoots[0]);
        //I usually don't like to test css as it can change very often. But in this case makes sense, since the feature is the url.
        expect(style.backgroundImage).toBe("url(http://test-url)");
    });
});
