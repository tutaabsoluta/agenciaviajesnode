// Importamos express
// const express = require('express'); // sintaxis common js
import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';




// Asignamos express a la variable app. app contendra una funcion que permite ejecutar express
const app = express();

// Conectar la BD
db.authenticate()
    .then( () => console.log('BD Conectada!!!'))
    .catch( error => console.log(error));


// Definir puerto
const port = process.env.PORT || 4000;

// Habilitar pug
app.set('view engine', 'pug');

// Obtener anio actual
// El next va al siguiente middleware
app.use( (req, res, next) => {
    const year = new Date()
    res.locals.anioActual = year.getFullYear();
    res.locals.nombreSitio = 'Agencia de Viajes';
    return next();// return obliga a que vaya al siguiente middleware
} )

// Agregar body parser para ller los datos del formulario
app.use(express.urlencoded({ extended: true }));

// Definir la carpeta publica
app.use(express.static('public'));

// Agregar router
app.use('/', router);
// use soporta get, post, delete, put, patch
// desde la pagina principal agrega router


// app con la funcion listen dice que se arranque el server
// le pasamos el server y luego con el callback nos dice si el el servidor esta funcionando
app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`); // Cuando se haga el deployment en Heroku la variable port debe estar creada
})