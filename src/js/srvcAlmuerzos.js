'use strict'

/****************
Listar
****************/
function listarAlmuerzos() {
    let listaAlmuerzos = [];
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/listar_almuerzos',
        type: 'get',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
        }
    });

    peticion.done(function (response) {
        listaAlmuerzos = response;
    });

    peticion.fail(function () {

    });

    return listaAlmuerzos;
};