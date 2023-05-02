import useImageUrl from "./useImageurl";
import { useQuery } from "@tanstack/react-query";

jest.mock("@tanstack/react-query");

describe("Testing the useImageUrl hook", () => {
    it("should return an object with the property src", () => {
        (useQuery as jest.Mock).mockReturnValue({
            data: { url: "/test-url" },
        });
        expect(useImageUrl().src).toBe("https://www.bing.com/test-url");
    });
});
