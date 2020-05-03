const express = require('express');
const app = express();
const porta = 3000;

app.use('/public', express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/login.html')
});

app.get('/perfil', function (req, res) {
    res.sendFile(__dirname + '/public/perfil.html')
});

app.get('/categoria', function (req, res) {
    res.sendFile(__dirname + '/public/categoria.html')
});

app.get('/home', function (req, res) {
    res.sendFile(__dirname + '/public/index.html')
});

app.get('/**', function (req, res) {
    res.sendFile(__dirname + '/public/erro.html')
});

app.listen(porta, function () {
    console.log(`Servidor ligado na porta ${porta}`);
})