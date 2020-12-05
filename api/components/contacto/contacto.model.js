'use strict';

let mongoose =require('mongoose');

let contacto_Schema=new mongoose.Schema({
    Nombre : {type : String, unique : false, required : true},
    correo : {type : String,  unique : true, required : true},
    Tema : {type : String, unique : false, required : true},
    Asunto : {type : String, unique : false, required : true},
    estado: {type : String, unique : false, required : true}

});

module.exports = mongoose.model('Contacto', contacto_Schema);