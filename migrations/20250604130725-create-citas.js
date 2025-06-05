'use strict';

const { CITA_TABLE, CitaSchema} = require('../models/cita')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(CITA_TABLE, CitaSchema)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(CITA_TABLE)
  }
};
