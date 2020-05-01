const http = require('http');
const fs = require('fs');

const port = 3000;

const server = http.createServer(function (req, res) {
    const url = req.url;
    try {
        switch (url) {
            case '/':
                fs.readFile(__dirname + '/home.html', function (e, html) {
                    res.writeHead(200, { "Content-type": "text/html" });
                    res.write(html);
                    res.end();
                });
                break;
            case '/categoria':
                fs.readFile(__dirname + "/categorias.html", function (e, html) {
                    res.writeHead(200, { "Content-type": "text/html" });
                    res.write(html);
                    res.end();
                });
                break;
            case '/perfil':
                fs.readFile(__dirname + "/perfil.html", function (e, html) {
                    res.writeHead(200, { "Content-type": "text/html" });
                    res.write(html);
                    res.end();
                });
                break;
            default:
                fs.readFile(__dirname + '/erro.html', function (e, html) {
                    res.writeHead(200, { "Content-type": "text/html" });
                    res.write(html)
                    res.end();
                });
                break;
        }
    } catch (e) {
        console.log(e.message);
    }
});

const servidorLigou = function () {
    console.log('Servidor local está rodando!');
    console.log(`Para acessar, abra o link a seguir em seu browser - htttp://localhost:${porta}`)
};

server.listen(porta, servidorLigou);