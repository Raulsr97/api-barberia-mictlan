const { Model, DataTypes, Sequelize} = require('sequelize')

const CITA_TABLE = 'citas'

const CitaSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    cliente_id: {
        allowNull: true,
        type: DataTypes.INTEGER,
        references: {
        model: 'clientes',
        key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    fecha_cita: {
        allowNull: false,
        type: DataTypes.DATEONLY
    },
    hora_cita: {
        allowNull: false,
        type: DataTypes.TIME
    },
    estado: {
        allowNull: false,
        type: DataTypes.ENUM('pendiente', 'confirmada', 'cancelada', 'completada'),
        defaultValue: 'pendiente'
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    },
    updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    }
}

class Cita extends Model {
    static associate(models) {
        // Asignaermos las relaciones mas adelante
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: CITAS_TABLE,
            modelName: 'Cita',
            timestamps: true
        }
    }
}

module.exports = { Cita, CitaSchema, CITA_TABLE}