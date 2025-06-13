'use strict';

const { ADMINISTRADOR_TABLE, AdministradorSchema } = require('../models/administrador');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(ADMINISTRADOR_TABLE, AdministradorSchema)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(ADMINISTRADOR_TABLE)
  }
};
