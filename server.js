const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Habilitar trust proxy (necesario si usas Dokploy o cualquier proxy)
app.enable('trust proxy');

// Middleware para forzar HTTPS
app.use((req, res, next) => {
  if (req.headers['x-forwarded-proto'] !== 'https') {
    return res.redirect('https://' + req.headers.host + req.url);
  }
  next();
});

// Servir archivos estáticos
app.use(express.static('public'));

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
