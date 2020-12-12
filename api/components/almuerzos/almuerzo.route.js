'use strict';

const express = require('express');
const router = express.Router();
const almuerzo_api = require('./almuerzo.api');

    router.route('/registrar_almuerzo')
    .post(function(req , res){
        almuerzo_api.registrar(req , res);
    });

    router.route('/listar_almuerzos')
    .get(function(req , res){
        almuerzo_api.listar_almuerzos(req , res);
    });


module.exports = router;