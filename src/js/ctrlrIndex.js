'use strict';
const botonEnviar = document.querySelector('#btnEnviar');
const inputNombre = document.querySelector('#txtNombre');
const inputCorreo = document.querySelector('#txtCorreo');
const inputAsunto = document.querySelector('#txtAsunto');
const txtAreaExplicar = document.querySelector('#txtExplicar');


function obtenerDatos(){
    let nombre=inputNombre.value;
    let correo=inputCorreo.value;
    let asunto=inputAsunto.value;
    let explicar=txtAreaExplicar.value;

    let error=validar(nombre, correo, asunto, explicar);

    if(error == true){
        Swal.fire({
            icon: 'warning',
            title: 'No se pudo enviar su mensaje',
            text: 'Por favor verifique los campos marcados',
          })
    }else{
        let respuesta = registrarContacto(nombre, correo, asunto, explicar);
        if(respuesta.success == true){
            Swal.fire({
                icon: 'success',
                title: 'Su mensaje ha sido enviado',
                text: respuesta.msg,
                showConfirmButton: "Entendido",
                timer: 1500
            })
            setTimeout(function(){location.href='index.html'} , 1300);
        }else{
            Swal.fire({
                title: 'Registro incorrecto',
                text: respuesta.msg,
                type: 'error',
                confirmButtonText: 'Entendido',
            });
        }
        
    }

};

function validar(pnombre, pcorreo, pasunto, pexplicar){
    let iconNombre=document.getElementById('iconNombre')
    let iconCorreo=document.getElementById('iconEmail')
    let iconAsunto=document.getElementById('iconAsunto')
    let iconExplicacion=document.getElementById('iconExplicacion')
    let error=false;
    let expCorreo=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/;

    if(pnombre==''){
        error=true;
        iconNombre.className += "fas fa-exclamation-circle";
    }else{
    };

    if(pcorreo==''||expCorreo.test(pcorreo) == false){
        error=true;
        iconCorreo.className += "fas fa-exclamation-circle";
    }else{
    };

    if(pasunto==''){
        error=true;
        iconAsunto.className += "fas fa-exclamation-circle";
    }else{
    };

    if(pexplicar==''){
        error=true;
        iconExplicacion.className += "fas fa-exclamation-circle";
    }else{
    };

    return error;
    
};


botonEnviar.addEventListener('click', obtenerDatos);