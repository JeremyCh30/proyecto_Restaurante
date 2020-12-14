'use strict';

let mongoose =require('mongoose');

let admin_Schema=new mongoose.Schema({
    tipoUsuario: {type : String,  unique : false, required : true},
    correo : {type : String,  unique : true, required : true},
    contrasenna : {type : String,  unique : true, required : true}

});

module.exports = mongoose.model('Admin', admin_Schema);