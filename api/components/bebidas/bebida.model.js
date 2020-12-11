'use strict';

let mongoose =require('mongoose');

let bebida_Schema=new mongoose.Schema({

    
    nombre : {type : String, unique : false, required : true},
    tipo: {type : String, unique : false, required : true},
    precio : {type : String, unique : false, required : true},
    imagen : {type : String, unique : true, required : true}
    
    
});

module.exports = mongoose.model('Bebida', bebida_Schema);