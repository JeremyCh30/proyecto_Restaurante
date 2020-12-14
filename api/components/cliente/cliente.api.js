'use strict';
const nodeMailer=require('nodemailer');
const cliente_model = require('./cliente.model');
const transporter=nodeMailer.createTransport({
    service: 'gmail',
    auth:{
        user: 'knd.restaurantcr@gmail.com',
        pass: 'kndAdmin'
    }
});

module.exports.registrar = function (req, res) {

    let nuevo_cliente = new cliente_model({
        tipoUsuario : req.body.tipoUsuario,
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        correo: req.body.correo,
        contrasenna: req.body.contrasenna

    });

    nuevo_cliente.save(function (error) {

        if (error) {
            res.json({
                success: false,
                msg: 'No se pudo registrar, ocurrió el siguiente error ' + error
            });
        } else {
            //https://myaccount.google.com/lesssecureapps desactivarlo para poder enviar emails
            let mailOptions = {
                from: 'KND - Restaurant',
                to: nuevo_cliente.correo,
                subject: 'Bienvenido a KND - Restaurant',
                html: `<!DOCTYPE html>
                <html lang="en">
                <head>
                    <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
                    <style>
                    html{
                    font-family: 'Lato', sans-serif;
                    font-size: 16px;
                    background-color: #c0392b;
                    line-height: 1;
                }
                .titulo{
                    font-size: 26px;
                    color: #2980b9;
                }
                .text{
                    line-height: 24px;
                }
                .box{
                    margin: 0 auto;
                    text-align: center;
                    width: 410px;
                    background-color: #ffffff;
                    padding: 35px;
                    border-radius: 20px;
                }
                .boton{
                    background-color: #c0392b;
                    padding: 10px;
                    text-decoration: none;
                    color: #ffffff;
                    border-radius: 10px;
                }
                .firma{
                    margin-top: 40px;
                }
                    </style>
                </head>
                
                <body>
                    <div class="box">
                        <h1 class="titulo">Bienvenido a KND - Restaurant</h1>
                        <p class="text">Saludos ${nuevo_cliente.nombre}, de parte del equipo de KND te queremos dar la bienvenida y agradecerte por preferirnos</p>
                        <p class="text">El correo asociado a tu cuenta es: ${nuevo_cliente.correo}</p>
                        <p class="text">Recuerda que cualquier consulta puedes realizarla al correo: 
                        knd.restaurantcr@gmail.com</p>
                        <p class="text">Hasta la próxima ${nuevo_cliente.nombre}</p>
                        <p class="firma">--KND  Restaurant--</p>  
                    </div>
                </body>
                
                </html>`

            };
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Correo enviado' + info.response);
                };
            });
            res.json({ success: true, msg: 'Su cuenta se registró con éxito' });
        };

    });

};

module.exports.listar_clientes = function (req, res) {
    cliente_model.find().sort({
        correo: 'asc'
    }).then(
        function (clientes) {
            res.send(clientes);
        }
    );
}

