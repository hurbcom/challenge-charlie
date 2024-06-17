/** Fetch daily Bing background image URL */
export async function getBingApi(): Promise<string> {
    try {
        const response = await fetch(
            "https://corsproxy.io/?https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR"
        );
        const data = await response.json();
        let imageUrl = data.images[0].url;
        const fullUrl = `https://www.bing.com${imageUrl}`;
        return fullUrl;
    } catch (error) {
        console.error("Error fetching bing data!", error);
        throw error;
    }
}
