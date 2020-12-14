'use strict';

let mongoose =require('mongoose');

let cliente_Schema=new mongoose.Schema({
    tipoUsuario: {type : String,  unique : false, required : true},
    nombre : {type : String,  unique : false, required : true},
    apellidos : {type : String,  unique : false, required : true},
    correo : {type : String,  unique : true, required : true},
    contrasenna : {type : String,  unique : false, required : true}

});

module.exports = mongoose.model('Cliente', cliente_Schema);