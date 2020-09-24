//configuración del servidor node

const express = require('express');
const app = express();
const morgan = require('morgan');
const colors = require('colors');

//configuración del puerto
app.set('port', process.env.PORT || 3000); //si existe un puerto definido , tomarlo por defecto , si no el puerto 3000
app.set('json spaces',2); // formato json

//middleware

app.use(morgan('combined'));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false})); //datos ligeros del formulario

//rutas
app.use(require('./rutas/index')); // ruta externa 
app.use('/api/records',require('./rutas/records'));
app.use('/api/usuarios',require('./rutas/usuarios'));


//iniciando el servidor
app.listen(app.get('port'), () =>{

	console.log(`Servidor en el puerto ${app.get('port')}`);
});