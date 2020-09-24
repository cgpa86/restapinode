const {Router} = require('express');
const router = Router();

const fetch = require('node-fetch');
router.get('/', async(req, res) =>{
	const response = await fetch('https://jsonplaceholder.typicode.com/users');//peticion a una direccion url externa
	const usuarios = await response.json();
	//console.log(usuarios);
	res.json(usuarios);
});
module.exports = router;