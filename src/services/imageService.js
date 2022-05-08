function fetchBackgroundImageUrl() {
    return new Promise((resolve, reject) => {
        const params = {
            format: 'js',
            idx: '0',
            n: '1',
            mkt: 'pt-US',
        };
        fetch(`/HPImageArchive.aspx?${new URLSearchParams(params).toString()}`)
            .then((response) => response.json())
            .then((json) => resolve(`${json.images[0].url}`))
            .catch((error) => reject(error));
    });
}

export default {
    fetchBackgroundImageUrl,
};
