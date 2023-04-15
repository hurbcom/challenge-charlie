export const getBackgroundImageURL = async (): Promise<string> => {
    try {
        const img = await fetch(
            "https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR"
        ).then((response) => {
            return response.json();
        });
        if (!img.images || !img.images[0]) {
            throw new Error("Invalid image request");
        }
        return img.images[0].url;
    } catch (error) {
        console.error(error);
        return "";
    }
};
