const { DataTypes, Model} = require('sequelize')

const CITAS_SERVICIO = 'cita_servicios'

const CitaServicioSchema = {
    id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    cita_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: 'citas',
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    servicio_id : {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: 'servicios',
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    }
}

class CitaServicio extends Model {
    static associate(models) {

    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: CITAS_SERVICIO,
            modelName: 'CitaServicio',
            timestamps: true
        }
    }
}

module.exports = { CITAS_SERVICIO, CitaServicioSchema, CitaServicio}