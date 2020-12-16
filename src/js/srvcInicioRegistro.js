'use strict';

/*iniciar sesion*/
function validarCredenciales(pcorreo, pcontrasenna) {
    let respuesta = false;
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/validar_clientes',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
            correo: pcorreo,
            contrasenna: pcontrasenna
        }
    });

    peticion.done(function (response) {
        respuesta = response;
        sessionStorage.setItem('conectado', response.success);
        sessionStorage.setItem('tipoUsuario', response.tipo);
    });

    peticion.fail(function () {

    });

    return respuesta;
};

/*Registrar*/
function registrarCliente(ptipoUsuario, pnombre, papellido, pcorreo, pcontrasenna) {
    let respuesta = '';
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/registrar_cliente',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
            tipoUsuario :ptipoUsuario,
            nombre : pnombre,
            apellidos : papellido,
            correo : pcorreo,
            contrasenna : pcontrasenna
            
        }
    });

    peticion.done(function (response) {
        respuesta = response;
    });

    peticion.fail(function (response) {
        respuesta = response;
    });

    return respuesta;
};