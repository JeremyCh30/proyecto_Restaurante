'use strict'


/****************
Listar
****************/
function listarDesayunos() {
    let listaDesayunos = [];
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/listar_desayunos',
        type: 'get',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
        }
    });

    peticion.done(function (response) {
        listaDesayunos = response;
    });

    peticion.fail(function () {

    });

    return listaDesayunos;
};