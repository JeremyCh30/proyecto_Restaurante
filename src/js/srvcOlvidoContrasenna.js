'use strict';

function enviarCorreoContrasenna(pcorreo) {
    let respuesta = false;
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/recuperar_contrasenna',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
            correo: pcorreo
        }
    });

    peticion.done(function (response) {
        respuesta = response;
    });

    peticion.fail(function () {
        respuesta = response;
    });

    return respuesta;
};