'use strict';

const botonEnviar = document.querySelector('#btnEnviar');
const inputCorreo = document.querySelector('#txtCorreo');

function obtenerDatos() {
    let correo = inputCorreo.value;

    let error = validar(correo);
    if (error) {
        swal.fire({
            icon: 'warning',
            title: 'No se enviar el mensaje',
            text: 'Por favor revise los espacios y vuelva a intentarlo'
        })
    } else {
        let respuesta = enviarCorreoContrasenna(correo);

        if (respuesta.success == true) {
            swal.fire({
                title: 'Contraseña enviada con éxito',
                text: 'Se ha enviado un correo con la contraseña, por favor ingresar para verificar',
                icon: 'success',
                confirmButtonText: 'Entendido'
            });
            inputCorreo.value="";
        } else {
            swal.fire({
                title: 'Registro incorrecto',
                text: respuesta.msg,
                icon: 'error',
                confirmButtonText: 'Entendido',
            });
        }
    }


};

function validar(pcorreo){
    let error=false;
    let expCorreo=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/;

    if(pcorreo=='' ||expCorreo.test(pcorreo) == false){
      error=true;
    }else{
      error=false;
    };
  
    return error;
  };

botonEnviar.addEventListener('click', obtenerDatos);