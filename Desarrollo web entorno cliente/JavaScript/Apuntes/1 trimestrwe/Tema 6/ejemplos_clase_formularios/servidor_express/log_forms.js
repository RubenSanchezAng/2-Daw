// instalar desde la terminal: npm install express cors

import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3003;

// Habilitar CORS
app.use(cors());

// Capturar cualquier tipo de datos sin procesar
app.use(express.raw({ type: '*/*', limit: '10mb' }));

// Middleware que captura todos los POST en cualquier ruta
app.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(" Datos recibidos:");
    console.log(" Content-Type:", req.headers['content-type']);

    const data = req.body.toString();
    console.log(data.length > 1000 ? data.substring(0, 1000) + '... [truncado]' : data);

    return res.json({ status: "success", message: "Datos recibidos" });
  }
  next();
});

app.listen(PORT, () => {
  console.log(` Servidor escuchando en http://localhost:${PORT}`);
});