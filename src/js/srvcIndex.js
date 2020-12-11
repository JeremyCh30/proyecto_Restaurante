'use strict'

/****************
    Registrar
****************/
function registrarContacto(pnombre, pcorreo, ptema, pasunto, pMensajeWhatsapp) {
    let respuesta = '';
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/registrar_contacto',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {

            nombre : pnombre,
            correo : pcorreo,
            tema : ptema,
            asunto: pasunto,
            message : pMensajeWhatsapp
        },
        
    });
    

    peticion.done(function (response) {
        respuesta = response;
    });

    peticion.fail(function (response) {
        respuesta = response;
    });

    return respuesta;
};