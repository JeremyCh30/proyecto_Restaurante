'use strict'

/****************
Listar
****************/
function listarCenas() {
    let listaCenas = [];
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/listar_cenas',
        type: 'get',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
        }
    });

    peticion.done(function (response) {
        listaCenas = response;
    });

    peticion.fail(function () {

    });

    return listaCenas;
};