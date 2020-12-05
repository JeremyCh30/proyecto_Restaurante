'use strict';

const contacto_model=require('./contacto.model');

module.exports.registrar=function(req, res){
    
    let nuevo_contacto=new contacto_model({
        
        
        nombre : req.body.nombre,
        correo : req.body.correo,
        tema : req.body.contrasenna,
        asunto: req.body.tipoUsuario,

    });

    nuevo_contacto.save(function(error){

        if(error){
            res.json({success : false, msg: 'No se pudo registrar, ocurrió el siguiente error ' + error});
        }else{
            res.json({success : true, msg: 'Registro éxitoso'});
        };

    });
    
};

module.exports.listar_contactos = function(req , res){
    contacto_model.find().sort({nombre: 'asc'}).then(
        function(contactos){
            res.send(contactos);
        }
    );
}
