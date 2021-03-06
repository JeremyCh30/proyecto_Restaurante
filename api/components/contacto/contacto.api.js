'use strict';

const contacto_model=require('./contacto.model');
const accountSid = 'AC9285ab83c1bb96ab837aca05a4eb6666'; 
const authToken = '19c115892abdbba39b1bcd88d61e5376'; 
const client = require('twilio')(accountSid, authToken); 

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
            const {message } = req.body;

            client.messages.create({
            body: message, 
            from: 'whatsapp:+14155238886',     
            to: `whatsapp:+50687944158`
            });
            res.json({success : true, msg: 'Registro éxitoso'});
        };

    });
    
};



