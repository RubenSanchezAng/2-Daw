// server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3003;

// Habilitar CORS para todas las rutas y orígenes
app.use(cors());

// Permitir recibir datos de formularios HTML
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Ruta POST para el formulario
app.post('/foo', (req, res) => {
  console.log("🔥 Datos recibidos POST:", req.body);

  // Respuesta JSON
  res.json({
    status: "success",
    message: "Datos recibidos",
    data: req.body
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`👽 Servidor escuchando en http://localhost:${PORT}`);
});
