const express = require('express');
const BingClass = require('../services/bing');

const router = express.Router();
const Bing = new BingClass();

router.get('/', async (_, res) => {
	try {
		const background = await Bing.getSpotlightImage();
		res.send(background);
	}
	catch (error) {
		res.status(500).send(error);
	}
});

module.exports = router;