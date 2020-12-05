'use strict';

const express = require('express');
const router = express.Router();
const admin_api = require('./admin.api');

    router.route('/registrar_admin')
    .post(function(req , res){
        admin_api.registrar(req , res);
    });

    router.route('/listar_admins')
    .get(function(req , res){
        admin_api.listar_admins(req , res);
    });


module.exports = router;