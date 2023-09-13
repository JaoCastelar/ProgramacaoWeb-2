const express = require('express');
const bbt = require('./bd_bbt.js');
const spn = require('./bd_sn.js');
const st = require('./bd_st.js');
const app = express();
const port = 3000;

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index', {
        fotos: [bbt.fotoPoster, spn.fotoPoster, st.fotoPoster],
        links: ["/bbt", "/spn", "/st"]
    });
});

app.get('/bbt', (req, res) => {
    res.render('bbt', bbt);
});

app.get('/spn', (req, res) => {
    res.render('spn', spn);
});

app.get('/st', (req, res) => {
    res.render('st', st);
});

app.listen(port, () => {
    console.log(`Servidor executando em ${port}`);
  });