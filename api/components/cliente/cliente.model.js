'use strict';

let mongoose =require('mongoose');

let cliente_Schema=new mongoose.Schema({
    correo : {type : String,  unique : true, required : true},
    contrasenna : {type : String,  unique : true, required : true}

});

module.exports = mongoose.model('Cliente', cliente_Schema);