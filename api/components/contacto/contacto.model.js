'use strict';

let mongoose =require('mongoose');

let contacto_Schema=new mongoose.Schema({
    nombre : {type : String,  unique : false, required : true},
    correo : {type : String,  unique : false, required : true},
    tema : {type : String,  unique : false, required : true},
    asunto : {type : String,  unique : false, required : true}

});



module.exports = mongoose.model('Contacto', contacto_Schema);
