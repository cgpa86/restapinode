const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
	res.json({"Titulo": "Rest API NODEjs"});
});

module.exports =router;
