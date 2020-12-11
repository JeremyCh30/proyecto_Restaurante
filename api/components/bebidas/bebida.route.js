'use strict';

const express = require('express');
const router = express.Router();
const bebida_api = require('./bebida.api');

    router.route('/registrar_bebida')
    .post(function(req , res){
        bebida_api.registrar(req , res);
    });

    router.route('/listar_bebidas')
    .get(function(req , res){
        bebida_api.listar_bebidas(req , res);
    });


module.exports = router;