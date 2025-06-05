'use strict';

const { CLIENTE_TABLE, ClienteSchema } = require('../models/cliente')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(CLIENTE_TABLE, ClienteSchema)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(CLIENTE_TABLE)
  }
};
