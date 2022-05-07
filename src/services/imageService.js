function fetchBackgroundImageUrl() {
    return new Promise((resolve, reject) => {
        fetch('/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-US')
            .then((response) => response.json())
            .then((json) => resolve(`${process.env.REACT_APP_BING_URL}/${json.images[0].url}`))
            .catch((error) => reject(error));
    });
}

export default {
    fetchBackgroundImageUrl,
};
