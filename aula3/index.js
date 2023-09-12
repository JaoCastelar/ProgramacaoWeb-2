const express = require('express');
const example = require('./exemple.json');
const app = express();
const port = 3000;

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index', example);
});

app.listen(port, () => {
    console.log(`Servidor executando em ${port}`);
  });