'use strict'
const clienteModel = require('../cliente/cliente.model');

module.exports.ingresarCliente = function (req, res) {
    clienteModel.findOne({ correo: req.body.correo }).then(
        function (usuario) {
            if (usuario == null) {
                res.send(false);
            } else {
                if (usuario.contrasenna == req.body.contrasenna) {
                    res.json({
                        success: true,
                        usuario: usuario.correo,
                        tipo: usuario.tipoUsuario
                    });
                } else {
                    res.send(false);
                }
            }

        }
    );
}
