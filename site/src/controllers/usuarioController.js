var usuarioModel = require("../models/usuarioModel");

var sessoes = [];


function pegarIcon(req, res) {
    var idUsuario = req.params.idUsuario;
    /* var idUsuario = req.body.idUsuarioServer; */

    usuarioModel.pegarIcon(idUsuario)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}  

function perfilSeguindo(req, res) {
    var idUsuario = req.params.idUsuario;

    usuarioModel.perfilSeguindo(idUsuario)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}  

function perfilSeguidores(req, res) {
    var idUsuario = req.params.idUsuario;

    usuarioModel.perfilSeguidores(idUsuario)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
} 

function entrar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {
        
        usuarioModel.entrar(email, senha)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            ); 
    }

}

function recuperar(req, res) {
    var email = req.body.email;
    var codigo = req.body.codigo;

    usuarioModel.recuperar(email, codigo)
        .then(
            function (resultado) {
                console.log(`\nResultados encontrados: ${resultado.length}`);
                console.log(`Resultados: ${JSON.stringify(resultado)}`);
                res.json(resultado);

/*                 if (resultado.length == 1) {
                    console.log(resultado);
                    res.json(resultado[0]);
                } else if (resultado.length == 0) {
                    res.status(403).send("Email e/ou senha inválido(s)");
                } else {
                    res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                } */
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        ); 
    
}

function atualizarSenha(req, res) {
    var senha = req.body.senha1
    var email = req.body.email

    usuarioModel.atualizarSenha(senha, email)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao cadastrar o email! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
    
}

function cadastrar(req, res) {
    var nickname = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var codigo = req.body.codigo;

    if (nickname == undefined || email == undefined || senha == undefined) {
        console.log('Preencha os campos corretamentes')
    } else {     
        usuarioModel.cadastrar(nickname, senha, email, codigo)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function newsletter(req, res) {
    var email = req.body.email;

    usuarioModel.newsletter(email)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao cadastrar o email! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
    
}

function avaliacao(req, res) {
    var idUsuario = req.body.idUsuario;
    var msg = req.body.msgAvaliacao;
    var estrelas = req.body.estrelas;
    
    usuarioModel.avaliacao(idUsuario, msg, estrelas)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar a avaliação! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function deletarAvaliacao(req, res) {
    var idUsuario = req.params.idUsuario;
    
    usuarioModel.deletarAvaliacao(idUsuario)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao deletar a avaliação! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function seguirUser(req, res) {
    var seguidor = req.body.userAtual;
    var seguido = req.body.userTela;
    
    usuarioModel.seguirUser(seguidor, seguido)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function atualizarPerfil(req, res) {
    var nick = req.body.novoNick;
    var desc = req.body.novaDesc;
    var icone = req.body.iconeNovo;
    var fundo = req.body.fundoNovo;
    var idUsuario = req.params.idUsuario;

    usuarioModel.atualizarPerfil(nick, desc, icone, fundo, idUsuario)
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

module.exports = {
    entrar,
    cadastrar,
    pegarIcon,
    atualizarPerfil,
    seguirUser,
    avaliacao,
    deletarAvaliacao,
    perfilSeguindo,
    perfilSeguidores,
    newsletter,
    recuperar,
    atualizarSenha
}