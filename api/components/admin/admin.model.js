'use strict';

let mongoose =require('mongoose');

let admin_Schema=new mongoose.Schema({
    correo : {type : String,  unique : true, required : true},
    contrasenna : {type : String,  unique : true, required : true}

});

module.exports = mongoose.model('Admin', admin_Schema);