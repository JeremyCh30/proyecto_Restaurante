'use strict';

const cena_model=require('./cena.model');

module.exports.registrar=function(req, res){
    
    let nueva_cena=new cena_model({
        nombre : req.body.nombre,
        tipo : req.body.tipo,
        precio : req.body.precio,
        imagen : req.body.imagen

    });

    nueva_cena.save(function(error){

        if(error){
            res.json({success : false, msg: 'No se pudo registrar, ocurrió el siguiente error ' + error});
        }else{
            res.json({success : true, msg: 'Registro éxitoso'});
        };

    });
    
};

module.exports.listar_cenas = function(req , res){
    cena_model.find().sort({precio: 'asc'}).then(
        function(cenas){
            res.send(cenas);
        }
    );
}