var canvasModel = require("../models/canvasModel");

var sessoes = [];

function canvasBase64(req, res) {
    var base64 = req.body.canvasServer;
    var idDesenho = req.body.idServer;
    var titulo = req.body.tituloServer;

    canvasModel.canvasBase64(base64, idDesenho, titulo)
        .then(
            function (resultado) {
                console.log(`\nResultados encontrados: ${resultado.length}`);
                console.log(`Resultados: ${JSON.stringify(resultado)}`);

                res.json(resultado);

            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao guardar o canvas! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
            }
        );
}

function carregarDesenho(req, res) {

    canvasModel.carregarDesenho()
        .then(
            function (resultado) {
                console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`);

                    res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao puxar as informações! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
            }
        );
}

function pesquisar(req, res) {

    canvasModel.pesquisar()
        .then(
            function (resultado) {
                console.log(`\nResultados encontrados: ${resultado.length}`);
                console.log(`Resultados: ${JSON.stringify(resultado)}`);

                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao puxar as informações! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
            }
        );
}



module.exports = {
    canvasBase64,
    carregarDesenho,
    pesquisar
}