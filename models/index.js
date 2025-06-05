'use strict';

const { Cliente, ClienteSchema } = require('./cliente')
const { Servicio, ServicioSchema } = require('./servicio')
const { Cita, CitaSchema } = require('./cita')
const { CitaServicio, CitaServicioSchema} = require('./cita_servicio')

function setupModels (sequelize) {
  Cliente.init(ClienteSchema, Cliente.config(sequelize))
  Servicio.init(ServicioSchema, Servicio.config(sequelize))
  Cita.init(CitaSchema, Cita.config(sequelize))
  CitaServicio.init(CitaServicioSchema.config(sequelize))

  Cliente.associate?.(sequelize.models)
  Servicio.associate?.(sequelize.models)
  Cita.associate?.(sequelize.models)
  CitaServicio.associate?.(sequelize.models)
}

module.exports = setupModels