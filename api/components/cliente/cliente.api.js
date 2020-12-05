'use strict';

const cliente_model=require('./cliente.model');

module.exports.registrar=function(req, res){
    
    let nuevo_cliente=new cliente_model({
        correo : req.body.correo,
        contrasenna : req.body.contrasenna

    });

    nuevo_cliente.save(function(error){

        if(error){
            res.json({success : false, msg: 'No se pudo registrar, ocurrió el siguiente error ' + error});
        }else{
            res.json({success : true, msg: 'Registro éxitoso'});
        };

    });
    
};

module.exports.listar_clientes = function(req , res){
    cliente_model.find().sort({correo: 'asc'}).then(
        function(clientes){
            res.send(clientes);
        }
    );
}