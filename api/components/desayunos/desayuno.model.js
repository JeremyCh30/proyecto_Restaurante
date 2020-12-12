'use strict';

let mongoose =require('mongoose');

let desayuno_Schema=new mongoose.Schema({

    
    nombre : {type : String, unique : false, required : true},
    tipo: {type : String, unique : false, required : true},
    precio : {type : String, unique : false, required : true},
    imagen : {type : String, unique : true, required : true}
    
    
});

module.exports = mongoose.model('Desayuno', desayuno_Schema);