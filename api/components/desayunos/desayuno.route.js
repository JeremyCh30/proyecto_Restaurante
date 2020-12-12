'use strict';

const express = require('express');
const router = express.Router();
const desayuno_api = require('./desayuno.api');

    router.route('/registrar_desayuno')
    .post(function(req , res){
        desayuno_api.registrar(req , res);
    });

    router.route('/listar_desayunos')
    .get(function(req , res){
        desayuno_api.listar_desayunos(req , res);
    });


module.exports = router;