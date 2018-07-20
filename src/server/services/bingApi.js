const https = require("https");

let bingApi = {};

bingApi.obtemFoto = function(request, response) {
    let resposta = "";

    let req = https.get(
        "https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR",
        resp => {
            resp.on("data", data => {
                resposta += data;
            });
            resp.on("end", data => {
                response.json(JSON.parse(resposta));
            });
        }
    );

    req.on("error", data => {
        console.dir(data);
        response.json(resposta);
    });
};

module.exports = bingApi;
