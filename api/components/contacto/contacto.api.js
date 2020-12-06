'use strict';

const contacto_model=require('./contacto.model');

module.exports.registrar=function(req, res){
    
    let nuevo_contacto=new contacto_model({
        nombre : req.body.nombre,
        correo : req.body.correo,
        tema : req.body.tema,
        asunto : req.body.asunto

    });

    nuevo_contacto.save(function(error){

        if(error){
            res.json({success : false, msg: 'No se pudo registrar, ocurrió el siguiente error ' + error});
        }else{
            res.json({success : true, msg: 'Registro éxitoso'});
        };

    });
    
};
