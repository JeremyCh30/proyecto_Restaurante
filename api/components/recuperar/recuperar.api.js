'use strict'
const nodeMailer=require('nodemailer');
const clienteModel = require('../cliente/cliente.model');

const transporter=nodeMailer.createTransport({
    service: 'gmail',
    auth:{
        user: 'knd.restaurantcr@gmail.com',
        pass: 'kndAdmin'
    }
});

module.exports.recuperarContraseña = function (req, res) {
    clienteModel.findOne({ correo: req.body.correo }).then(
        function (usuario) {
            if (usuario == null) {
                res.send(false);
            } else {
                if (usuario.correo == req.body.correo) {
                    {
                        //https://myaccount.google.com/lesssecureapps desactivarlo para poder enviar emails
                        let mailOptions = {
                            from: 'KND - Restaurant',
                            to: usuario.correo,
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
                            span{
                                font-weight: bold;
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
                                    <h1 class="titulo"> ¿Olvidó Su contraseña?</h1>
                                    <p class="text">Saludos ${usuario.nombre}, nos ha llegado un notificación de contraseña olvidada</p>
                                    <p class="text">El correo asociado a tu cuenta es: ${usuario.correo}</p>
                                    <p class="text">Y tu contraseña asociada a tu cuenta es: <span>${usuario.contrasenna}</span></p>
                                    <p class="text">Recuerda guardar tu contraseña en un lugar seguro</p>
                                    <p class="text">Cualquier consulta puedes realizarla al correo: 
                                    knd.restaurantcr@gmail.com</p>
                                    <p class="text">Hasta la próxima ${usuario.nombre}</p>
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
                } else {
                    res.send(false);
                }
            }

        }
    );
}