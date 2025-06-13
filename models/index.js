'use strict';

const { Cliente, ClienteSchema } = require('./cliente')
const { Servicio, ServicioSchema } = require('./servicio')
const { Cita, CitaSchema } = require('./cita')
const { CitaServicio, CitaServicioSchema} = require('./cita_servicio')
const { Administrador, AdministradorSchema } = require('./administrador')

function setupModels (sequelize) {
  Cliente.init(ClienteSchema, Cliente.config(sequelize))
  Servicio.init(ServicioSchema, Servicio.config(sequelize))
  Cita.init(CitaSchema, Cita.config(sequelize))
  CitaServicio.init(CitaServicioSchema.config(sequelize))
  Administrador.init(AdministradorSchema.config(sequelize))
  

  Cliente.associate?.(sequelize.models)
  Servicio.associate?.(sequelize.models)
  Cita.associate?.(sequelize.models)
  CitaServicio.associate?.(sequelize.models)
  Administrador.associate?.(sequelize.models)
}

module.exports = setupModels