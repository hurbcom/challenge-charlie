import { ImageService } from "../services/ImageService";

describe("ImageService", () => {
    it("it should return error", async () => {
        let error;
        try {
            await ImageService.getImage();
        } catch (e: any) {
            error = e.message;
        }

        expect(error).toBe("error");
    });

    it("it should successfully respond a bing url", async () => {
        process.env.REACT_APP_API_BING_URL = "https://api-bing.herokuapp.com/";
        process.env.REACT_APP_BING_URL = "https://www.bing.com";
        let response;
        try {
            response = await ImageService.getImage();
        } catch (e) {
            console.log(e);
        }

        expect(response).toMatch(new RegExp(/^https:\/\/www.bing.com/));
    });
});
