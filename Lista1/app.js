const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});
app.get('/user', (req, res) => {
    res.sendFile(path.join(__dirname, "user.html"));
});
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, "about.html"));
});
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, "login.html"));
});

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, "404.html"));
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})