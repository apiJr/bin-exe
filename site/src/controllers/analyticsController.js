var analyticsModel = require("../models/analyticsModel");

var sessoes = [];

function curtidos(req, res) {

    analyticsModel.curtidos()
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );

}

function dCurtidos(req, res) {

    analyticsModel.dCurtidos()
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );

}

function visualizados(req, res) {

    analyticsModel.visualizados()
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );

}

function dVisualizados(req, res) {

    analyticsModel.dVisualizados()
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );

}

function recentes(req, res) {

    analyticsModel.recentes()
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );

}

function dRecentes(req, res) {

    analyticsModel.dRecentes()
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );

}

function site(req, res) {
    analyticsModel.site()
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
}
function site2(req, res) {
    analyticsModel.site2()
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
}
function site3(req, res) {
    analyticsModel.site3()
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
}
function site4(req, res) {
    analyticsModel.site4()
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
}

module.exports = {
    curtidos,
    visualizados,
    recentes,
    dCurtidos,
    dVisualizados,
    dRecentes,
    site,
    site2,
    site3,
    site4
}