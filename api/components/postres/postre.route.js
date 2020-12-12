'use strict';

const express = require('express');
const router = express.Router();
const postre_api = require('./postre.api');

    router.route('/registrar_postre')
    .post(function(req , res){
        postre_api.registrar(req , res);
    });

    router.route('/listar_postres')
    .get(function(req , res){
        postre_api.listar_postres(req , res);
    });


module.exports = router;