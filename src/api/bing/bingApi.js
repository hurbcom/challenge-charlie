import request from 'request';

let bingEndpoint = 'https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR';

export const getBackgroundImage = () => {
    return new Promise ((resolve, reject) => {
        request(bingEndpoint, (err, response, body) => {
            if(err){
                reject(err);
            }
            const { images } = JSON.parse(body);
            let backgroundUrl = images[0].url;
            resolve('https://www.bing.com/' + backgroundUrl);
        });
    });
}