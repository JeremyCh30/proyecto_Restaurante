'use strict';

const express = require('express');
const router = express.Router();
const contacto_api = require('./contacto.api');

    router.route('/registrar_contacto')
    .post(function(req , res){
        contacto_api.registrar(req , res);
    });

    router.route('/listar_contactos')
    .get(function(req , res){
        contacto_api.listar_contactos(req , res);
    });


module.exports = router;