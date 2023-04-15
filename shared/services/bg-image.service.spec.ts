import { getBackgroundImageURL } from "./bg-image.service";

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({ images: [{ url: "/zucc" }] }),
    })
) as jest.Mock;

beforeEach(() => {
    (fetch as jest.Mock).mockClear();
});

describe("Testing the background image service", () => {
    describe("getBackgroundImageURL()", () => {
        it("should return a valid string in case of success", async () => {
            const url = await getBackgroundImageURL();
            expect(url).toBe("/zucc");
        });

        it("should return a empty string in case of failure", async () => {
            (fetch as jest.Mock).mockImplementationOnce(() =>
                Promise.reject("API is down")
            );
            const url = await getBackgroundImageURL();
            expect(url).toBe("");
        });
    });
});
