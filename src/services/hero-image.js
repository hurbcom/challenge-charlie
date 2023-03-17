export const getHeroImage = async () => {
    const bingUrl =
        "https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR";

    const response = await fetch(bingUrl).then((result) => result.json());
    const imageData = response.images[0];
    const imageUrl = "https://www.bing.com/" + imageData.url;
    const imageAlt = imageData.copyright;

    return {
        url: imageUrl,
        alt: imageAlt
    }
}