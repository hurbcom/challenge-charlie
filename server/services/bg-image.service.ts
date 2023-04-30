export interface FeaturedImageData {
    url: string;
}

export const getBackgroundImageData = async (): Promise<FeaturedImageData> => {
    try {
        const BING_API_URL = process.env.BING_API_URL;
        if (!BING_API_URL) {
            throw new Error("Bing api not configured");
        }
        const img = await fetch(BING_API_URL).then((response) => {
            return response.json();
        });
        if (!img.images || !img.images[0]) {
            throw new Error("Invalid image request");
        }
        return img.images[0];
    } catch (error) {
        console.error(error);
        return { url: "" };
    }
};
