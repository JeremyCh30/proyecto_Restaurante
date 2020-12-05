'use strict';

const admin_model=require('./admin.model');

module.exports.registrar=function(req, res){
    
    let nuevo_admin=new admin_model({
        correo : req.body.correo,
        contrasenna : req.body.contrasenna

    });

    nuevo_admin.save(function(error){

        if(error){
            res.json({success : false, msg: 'No se pudo registrar, ocurrió el siguiente error ' + error});
        }else{
            res.json({success : true, msg: 'Registro éxitoso'});
        };

    });
    
};

module.exports.listar_admins = function(req , res){
    admin_model.find().sort({correo: 'asc'}).then(
        function(admins){
            res.send(admins);
        }
    );
}