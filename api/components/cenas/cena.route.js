'use strict';

const express = require('express');
const router = express.Router();
const cena_api = require('./cena.api');

    router.route('/registrar_cena')
    .post(function(req , res){
        cena_api.registrar(req , res);
    });

    router.route('/listar_cenas')
    .get(function(req , res){
        cena_api.listar_cenas(req , res);
    });


module.exports = router;