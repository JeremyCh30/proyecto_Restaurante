'use strict'
const navegador= document.querySelector('#nav_principal');
const nav = document.querySelectorAll('#nav_principal li');
const botonCerrarSesion= document.querySelector('#login');

let conectado = sessionStorage.getItem('conectado');
let usuario = sessionStorage.getItem('tipoUsuario');

if (conectado) {
    switch (usuario) {
        case '1':/**cliente*/

            break;

        case '0':/**admin*/

            break;
            

        default:

            break;

    }
} else {
    window.location.href = '../pags/inicio_registro.html';
}

function cerrarSesion(){
    sessionStorage.clear();
    window.location.href='../pags/inicio_registro.html'
};

botonCerrarSesion.addEventListener('click', cerrarSesion);