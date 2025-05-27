'use strict';
const { SERVICIO_TABLE, ServicioSchema} = require('../models/servicio')


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(SERVICIO_TABLE, ServicioSchema)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(SERVICIO_TABLE)
  }
};
