const getBingImage = async (req, res) => {
    const bingUrl =
        "https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR";

    const response = await fetch(bingUrl).then((result) => result.json());
    const image = response.images[0];
    const imageUrl = "https://www.bing.com/" + image.url;
    const imageAlt = image.copyright;
    const body = {
        imageUrl,
        imageAlt,
    };

    res.status(200).send(body);
};

export default getBingImage;
