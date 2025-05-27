'use strict';

const { Usuario, UsuarioSchema } = require('./usuario')
const { Servicio, ServicioSchema } = require('./servicio')

function setupModels (sequelize) {
  Usuario.init(UsuarioSchema, Usuario.config(sequelize))
  Servicio.init(ServicioSchema, Servicio.config(sequelize))

  Usuario.associate?.(sequelize.models)
  Servicio.associate?.(sequelize.models)
}

module.exports = setupModels