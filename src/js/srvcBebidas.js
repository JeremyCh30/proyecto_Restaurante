'use strict'


/****************
Listar
****************/
function listarBebidas() {
    let listaBebidas = [];
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/listar_bebidas',
        type: 'get',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
        }
    });

    peticion.done(function (response) {
        listaBebidas = response;
    });

    peticion.fail(function () {

    });

    return listaBebidas;
};