require('dotenv').config()
const { Sequelize } = require('sequelize')
const setupModels = require('../models/index')

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'mysql',
        logging: false
    }
)

// Aqui cargamos los modelos
setupModels(sequelize)

module.exports = sequelize