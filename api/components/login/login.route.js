'use strict';
const express = require('express');
const router = express.Router();
const loginApi = require('./login.api');

router.route('/validar_clientes')
    .post(function (req, res) {
        loginApi.ingresarCliente(req, res);
    });



module.exports = router;