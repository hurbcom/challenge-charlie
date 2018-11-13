import request from 'request';

//Finally got it working::
//https://stackoverflow.com/questions/12630231/how-do-cors-and-access-control-allow-headers-work

let bingEndpoint = 'https://cors-anywhere.herokuapp.com/https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR';

export const getBackgroundImage = () => {
    return new Promise ((resolve, reject) => {
                
        /*
        let options = {
            url: bingEndpoint,
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        };
        */
   
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