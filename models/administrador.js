const { DataTypes, Model} = require('sequelize')

const ADMINISTRADOR_TABLE = 'administradores'

const AdministradorSchema = {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}

class Administrador extends Model {
    static associate(models) {

    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: ADMINISTRADOR_TABLE,
            modelName: 'Administrador',
            timestamps: true
        }
    }
}

module.exports = { ADMINISTRADOR_TABLE, AdministradorSchema, Administrador }