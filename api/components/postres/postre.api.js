'use strict';

const postre_model=require('./postre.model');

module.exports.registrar=function(req, res){
    
    let nuevo_postre=new postre_model({
        nombre : req.body.nombre,
        tipo : req.body.tipo,
        precio : req.body.precio,
        imagen : req.body.imagen

    });

    nuevo_postre.save(function(error){

        if(error){
            res.json({success : false, msg: 'No se pudo registrar, ocurrió el siguiente error ' + error});
        }else{
            res.json({success : true, msg: 'Registro éxitoso'});
        };

    });
    
};

module.exports.listar_postres = function(req , res){
    postre_model.find().sort({precio: 'asc'}).then(
        function(postres){
            res.send(postres);
        }
    );
}