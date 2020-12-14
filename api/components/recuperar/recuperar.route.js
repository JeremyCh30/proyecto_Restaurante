'use strict';
const express = require('express');
const router = express.Router();
const recuperarApi = require('./recuperar.api');

router.route('/recuperar_contrasenna')
    .post(function (req, res) {
        recuperarApi.recuperarContraseña(req, res);
    });



module.exports = router;