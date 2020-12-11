'use strict';

const bebida_model=require('./bebida.model');

module.exports.registrar=function(req, res){
    
    let nueva_bebida=new bebida_model({
        nombre : req.body.nombre,
        tipo : req.body.tipo,
        precio : req.body.precio,
        imagen : req.body.imagen

    });

    nueva_bebida.save(function(error){

        if(error){
            res.json({success : false, msg: 'No se pudo registrar, ocurrió el siguiente error ' + error});
        }else{
            res.json({success : true, msg: 'Registro éxitoso'});
        };

    });
    
};

module.exports.listar_bebidas = function(req , res){
    bebida_model.find().sort({precio: 'asc'}).then(
        function(bebidas){
            res.send(bebidas);
        }
    );
}