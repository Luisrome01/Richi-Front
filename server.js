const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Sirve los archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Sirve los archivos estáticos desde la carpeta 'media'
app.use('/media', express.static(path.join(__dirname, 'media')));

// Ruta para la página principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`Frontend corriendo en http://localhost:${port}`);
});
