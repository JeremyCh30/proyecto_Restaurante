'use strict';

const desayuno_model=require('./desayuno.model');

module.exports.registrar=function(req, res){
    
    let nuevo_desayuno=new desayuno_model({
        nombre : req.body.nombre,
        tipo : req.body.tipo,
        precio : req.body.precio,
        imagen : req.body.imagen

    });

    nuevo_desayuno.save(function(error){

        if(error){
            res.json({success : false, msg: 'No se pudo registrar, ocurrió el siguiente error ' + error});
        }else{
            res.json({success : true, msg: 'Registro éxitoso'});
        };

    });
    
};

module.exports.listar_desayunos = function(req , res){
    desayuno_model.find().sort({precio: 'asc'}).then(
        function(desayunos){
            res.send(desayunos);
        }
    );
}