/**Movimiento entre pestañas de inico y registro**/
$('.form').find('input, textarea').on('keyup blur focus', function (e) {

  var $this = $(this),
    label = $this.prev('label');

  if (e.type === 'keyup') {
    if ($this.val() === '') {
      label.removeClass('active highlight');
    } else {
      label.addClass('active highlight');
    }
  } else if (e.type === 'blur') {
    if ($this.val() === '') {
      label.removeClass('active highlight');
    } else {
      label.removeClass('highlight');
    }
  } else if (e.type === 'focus') {

    if ($this.val() === '') {
      label.removeClass('highlight');
    } else if ($this.val() !== '') {
      label.addClass('highlight');
    }
  }

});

$('.tab a').on('click', function (e) {

  e.preventDefault();

  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');

  target = $(this).attr('href');

  $('.tab-content > div').not(target).hide();

  $(target).fadeIn(600);

});



/*iniciar Sesion*/
const botonIniciar = document.querySelector('#btnIniciar');
const inputCorreo = document.querySelector('#txtCorreo');
const inputContrasena = document.querySelector('#txtContrasena');

async function obtenerDatos() {
  let correo = inputCorreo.value;
  let contrasena = inputContrasena.value;

  let error = validar(correo, contrasena);
  let usuarioCliente = false;
  if (error) {
    swal.fire({
      icon: 'warning',
      title: 'No se pudo iniciar sesión',
      text: 'Por favor revise los espacios y vuelva a intentarlo'
    })
  } else {
    usuarioCliente = await validarCredenciales(correo, contrasena);

    if (usuarioCliente) {

      window.location.href = '../pags/desayunos.html';
    } else {
      swal.fire({
        icon: 'warning',
        title: 'No se pudo iniciar sesión',
        text: 'Verique el correo la contraseña y vuelva a intentarlo'
      })
    }
  }


};

function validar(pcorreo, pcontrasena) {
  let error = false;
  let expCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/;

  if (pcorreo = '' || expCorreo.test(pcorreo) == false) {
    error = true;
  } else {
    error = false;
  };

  if (pcontrasena == '') {
    error = true;
  } else {
    error = false;
  };
  return error;
};



/* Registrar cuenta */
const botonRegistrar = document.querySelector('#btnRegistrar');
const inputNombreRegistro = document.querySelector('#txtNombreReg');
const inputApellidosRegistro = document.querySelector('#txtApellidosReg');
const inputCorreoRegistro = document.querySelector('#txtCorreoReg');
const inputContrasenaRegistro = document.querySelector('#txtContrasennaReg');

function datosRegistro() {
  let tipo_usuario = "1"
  let nombre = inputNombreRegistro.value;
  let apellidos = inputApellidosRegistro.value;
  let correo = inputCorreoRegistro.value;
  let contrasena = inputContrasenaRegistro.value;

  let error = validarRegistro(nombre, apellidos, correo, contrasena);
  if (error) {
    swal.fire({
      icon: 'warning',
      title: 'No se pudo Registrar su cuenta',
      text: 'Por favor revise los espacios y vuelva a intentarlo'
    })
  } else {
    let respuesta = registrarCliente(tipo_usuario, nombre, apellidos, correo, contrasena);
    if (respuesta.success == true) {
      swal.fire({
        title: 'Registro correcto',
        text: respuesta.msg,
        icon: 'success',
        confirmButtonText: 'Entendido',
        timer: 1500
      });
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

function validarRegistro(pnombre, papellidos, pcorreo, pcontrasena){
  let error=false;
  let expLetras=/^[a-z A-ZáÁéÉíÍÚúñÑÜüëËÖöÓó]+$/;
  let expCorreo=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/;

  if(pnombre=='' || expLetras.test(pnombre) == false){
    error=true;
  }else{
    error=false;
  };

  if(papellidos=='' || expLetras.test(papellidos) == false){
    error=true;
  }else{
    error=false;
  };


  if(pcorreo=='' ||expCorreo.test(pcorreo) == false){
    error=true;
  }else{
    error=false;
  };

  if(pcontrasena==''){
      error=true;
  }else{
    error=false;
  };

  return error;
};



/* listeners inico y registro */
botonIniciar.addEventListener('click', obtenerDatos);
botonRegistrar.addEventListener('click', datosRegistro);