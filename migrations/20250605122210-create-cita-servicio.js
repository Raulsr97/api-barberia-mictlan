'use strict';

const { CITAS_SERVICIO, CitaServicioSchema } = require('../models/cita_servicio');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(CITAS_SERVICIO, CitaServicioSchema)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(CITAS_SERVICIO)
  }
};
