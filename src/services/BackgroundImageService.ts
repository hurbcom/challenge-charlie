const URL_IMAGE =
    'https://cors-anywhere.herokuapp.com/https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR';

export const getImageOfTheDay = async (): Promise<string | undefined> => {
    let headers = new Headers({
        origin: 'localhost',
    });
    try {
        const response = await fetch(URL_IMAGE, { headers });
        const currentImage = await response.json();
        return currentImage.images[0].url as string;
    } catch (error) {
        console.error(error);
        return undefined;
    }
};
