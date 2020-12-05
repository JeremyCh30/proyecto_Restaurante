'use strict';

const express = require('express');
const router = express.Router();
const cliente_api = require('./cliente.api');

    router.route('/registrar_cliente')
    .post(function(req , res){
        cliente_api.registrar(req , res);
    });

    router.route('/listar_clientes')
    .get(function(req , res){
        cliente_api.listar_clientes(req , res);
    });


module.exports = router;