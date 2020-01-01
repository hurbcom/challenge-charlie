import axios from "axios";

import { fetchBingImage } from "../bingImage";

jest.mock("axios");

describe("testing bing image services", () => {
    const data = { data: { images: [{ url: "/lero" }] } };

    beforeAll(() => {
        axios.get.mockImplementation(() => Promise.resolve(data));
    });

    it("returns the image address", async () => {
        expect(await fetchBingImage()).toBe("https://www.bing.com/lero");
    });
});
