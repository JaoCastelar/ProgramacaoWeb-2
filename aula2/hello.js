const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, "404.html"));
});

app.use((req, res) => {
    res.status(500).sendFile(path.join(__dirname, "500.html"));
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})