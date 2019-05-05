const express = require('express');
const request = require('request');

const router = express.Router();

const bingDomain = 'https://www.bing.com';
const bingApi = `${bingDomain}/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR`;

router.get('/background', function (_, res) {
	request(bingApi, (error, response) => {
		try {
			if (error)
				throw error;

			let body = JSON.parse(response.body);
			let background = {
				url: `${bingDomain}${body.images[0].url}`
			};
			res.send(background);
		}
		catch (error) {
			res.status(500).send("Erro ao buscar plano de fundo.");
		}
	});
});

module.exports = router;