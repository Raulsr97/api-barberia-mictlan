const { DataTypes, Model, Sequelize } = require('sequelize')

const SERVICIO_TABLE = 'servicios'

const ServicioSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  nombre: {
    allowNull: false,
    type: DataTypes.STRING
  },
  descripcion: {
    allowNull: true,
    type: DataTypes.TEXT
  },
  precio: {
    allowNull: false,
    type: DataTypes.DECIMAL(10, 2)
  },
  duracion_minutos: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  activo: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  }
}

class Servicio extends Model {
  static associate(models) {
    // this.belongsToMany(models.Cita, {
    //   through: 'cita_servicios',
    //   foreignKey: 'servicio_id',
    //   otherKey: 'cita_id',
    //   as: 'citas'
    // })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: SERVICIO_TABLE,
      modelName: 'Servicio',
      timestamps: true
    }
  }
}

module.exports = { Servicio, SERVICIO_TABLE, ServicioSchema}