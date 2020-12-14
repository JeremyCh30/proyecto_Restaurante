'use strict';

/**
 * Exportamos todas las dependencias necesarias para establecer la conexión
 */
const express = require('express'),
      app = express(),
      path = require('path'),
      bodyParser = require('body-parser'),
      morgan =  require('morgan'),
      mongoose = require('mongoose');

/**
 * Se definen las variables necesarias para la conexión con MongoDB
 */
    let db = mongoose.connection,
    dburl = 'mongodb+srv://jeremych:jbrionesc30@cluster0.m1smj.mongodb.net/restaurante_fundavida?retryWrites=true&w=majority',
    port = 4000;

/**
 * Se le indica que cree un servidor extra dentro del puerto 4000 y escuche los cambios que se le hagan a esos archivos
 */
let server = app.listen(port,_server());

/**
 * Se define la conexión con Mongoose, enviándole como parámetro la url de la base de datos
 */
mongoose.connect(dburl, { useNewUrlParser: true });

/**
 * Si la conexión falla, imprime en consola el error
 */
db.on('error', console.error.bind(console, 'Error de conexión: '));

/**
 * Si la conexión es exitosa nos imprime en la consola que se ha establecido conexión con Mongo
 */
db.once('open', function () {
  console.log('Base de datos conectada correctamente');
});

/**
 * Le indicamos a express que envíe las respuestas a la carpeta "public"
 */
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Le indicamos a la aplicación que el formato de los datos va a ser JSON
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('dev'));

app.use( function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

/**
 * Exportams todas las rutas dentro del index.js
*/
const contactos = require('./components/contacto/contacto.route');
const admin = require('./components/admin/admin.route');
const clientes = require('./components/cliente/cliente.route');
const bebidas = require('./components/bebidas/bebida.route');
const almuerzos = require('./components/almuerzos/almuerzo.route');
const cenas = require('./components/cenas/cena.route');
const desayunos = require('./components/desayunos/desayuno.route');
const postres = require('./components/postres/postre.route');
const login = require('./components/login/login.route');
const recuperar = require('./components/recuperar/recuperar.route');
/**
 * Le indicamos que le de acceso externo a las rutas inicializadas
 */
app.use('/api', contactos);
app.use('/api', admin);
app.use('/api', clientes);
app.use('/api', bebidas);
app.use('/api', almuerzos);
app.use('/api', cenas);
app.use('/api', desayunos);
app.use('/api', postres);
app.use('/api', recuperar);

// Se guarda todo lo que se ha realizado
module.exports = app;

function _server(){
  console.log('Back-end corriendo en el puerto ' + port);
};