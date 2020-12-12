'use strict';

const almuerzo_model=require('./almuerzo.model');

module.exports.registrar=function(req, res){
    
    let nuevo_almuerzo=new almuerzo_model({
        nombre : req.body.nombre,
        tipo : req.body.tipo,
        precio : req.body.precio,
        imagen : req.body.imagen

    });

    nuevo_almuerzo.save(function(error){

        if(error){
            res.json({success : false, msg: 'No se pudo registrar, ocurrió el siguiente error ' + error});
        }else{
            res.json({success : true, msg: 'Registro éxitoso'});
        };

    });
    
};

module.exports.listar_almuerzos = function(req , res){
    almuerzo_model.find().sort({precio: 'asc'}).then(
        function(almuerzos){
            res.send(almuerzos);
        }
    );
}