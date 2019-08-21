const api = 'https://cors-anywhere.herokuapp.com/bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR';

function getBackground() {

    return fetch(api, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
    })
        .then(response => {
            return response.json()
        })
};

export { getBackground };