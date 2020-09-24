const { Router } = require('express');
const colors = require('colors');
const router = Router();
const _ = require('underscore');  

const records = require('../ejemplo.json');
//console.log(records);

router.get('/',(req, res) =>{
	res.json(records);
});

router.post('/', (req,res) =>{
	//console.log(req.body);
	//res.send('recibido');
	const { titulo,artista,año,genero}= req.body;
	if(titulo && artista && año && genero){
		const id = records.length + 1;
		const nuevoRecord = {...req.body, id};//  ... se agregan los obj request body a un nvo obj.
		//console.log(nuevoRecord);
		records.push(nuevoRecord);// se agrega nuevo item	

		res.json(records);
	}else{
		//res.send('petición inválida');
			res.status(500).json({error:'se encontró un err0r.'});
	}
});

		router.put('/:id', (req, res) =>{
			const {id} = req.params;
			const { titulo,artista,año,genero}= req.body;
			if(titulo && artista && año && genero){
				_.each(records, (record, i)=>{
					if(record.id == id){
						record.titulo = titulo;
						record.artista = artista;
						record.año = año;

					}
				});
				res.json(records);
			}else{
				res.status(500).json({error:"hubo un error"});
			}
		});

	router.delete('/:id', (req, res) => {
		const {id} = req.params;
		_.each(records, (record, i) => {
			if(record.id == id){
				records.splice(i, 1);
			}
		})
		res.send(records);

	});

module.exports = router;