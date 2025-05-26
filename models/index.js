'use strict';

const { Usuario, UsuarioSchema } = require('./usuario')

function setupModels (sequelize) {
  Usuario.init(UsuarioSchema, Usuario.config(sequelize))

  Usuario.associate?.(sequelize.models)
}

module.exports = setupModels