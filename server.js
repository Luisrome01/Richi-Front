const express = require('express');
const path = require('path');
const fs = require('fs'); // Añadido para ver archivos

const app = express();
const port = process.env.PORT || 3000;

// Sirve los archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Sirve los archivos estáticos desde la carpeta 'media'
app.use('/media', express.static(path.join(__dirname, 'media')));

// Ruta para verificar los archivos en 'media'
app.get('/check-media', (req, res) => {
    fs.readdir(path.join(__dirname, 'media'), (err, files) => {
        if (err) {
            return res.status(500).send('Error reading media folder');
        }
        res.send(files); // Muestra los archivos en la carpeta media
    });
});

// Ruta para la página principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`Frontend corriendo en http://localhost:${port}`);
});
