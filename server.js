require('dotenv').config()
const express = require('express')
const sequelize = require('./config/database')
const setupModels = require('./models/index')

const app = express()
// middleware
app.use(express.json())

//Cargar modelos
setupModels(sequelize)

// Test de la conexion a la base de datos
sequelize
  .authenticate()
  .then(() => console.log('Conectado a la base de datos'))
  .catch((err) => console.error('Error al conectar a la base de datos', err))

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('API  de la barberia esta funcionando')
})

// Iniciar el servidor
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
})