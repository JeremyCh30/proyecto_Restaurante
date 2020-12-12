'use strict'


/****************
Listar
****************/
function listarPostres() {
    let listaPostres = [];
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/listar_postres',
        type: 'get',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
        }
    });

    peticion.done(function (response) {
        listaPostres = response;
    });

    peticion.fail(function () {

    });

    return listaPostres;
};