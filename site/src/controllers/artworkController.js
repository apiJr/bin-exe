var artworkModel = require("../models/artworkModel");

var sessoes = [];

function postagem(req, res) {
    var idPostagem = req.params.idPostagem;

    artworkModel.postagem(idPostagem)
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

function perfil(req, res) {
    var idArtista = req.params.idArtista;

        artworkModel.perfil(idArtista)
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

function perfill(req, res) {
    var idArtista = req.params.idArtista;

        artworkModel.perfill(idArtista)
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

function seguindo(req, res) {
    var idArtista = req.params.idArtista;

        artworkModel.seguindo(idArtista)
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

function curtiu(req, res) {
    var idArtista = req.params.idArtista;

        artworkModel.curtiu(idArtista)
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

function curtidos(req, res) {
    var idArtista = req.params.idArtista;

        artworkModel.curtidos(idArtista)
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

function likes(req, res) {
    var idArtista = req.body.idArtista;
    var userPostagem = req.body.userPostagem;
    var postagemAtual = req.body.postagemAtual;
    var imagemAtual = req.body.imagemAtual;

        artworkModel.likes(idArtista, userPostagem, postagemAtual, imagemAtual)
            .then(
                function (resultado) {
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

function users(req, res) {
    var posicoes = req.params.idArtista;
        
        artworkModel.users(posicoes)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); 
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            ); 
}

function seusFollows(req, res) {
    var idPerfil = req.params.idPerfil;
        
        artworkModel.seusFollows(idPerfil)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); 
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            ); 
}

function carregar(req, res){

    artworkModel.carregar()
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

function trending(req, res){

    artworkModel.trending()
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

function desenhos(req, res) {
    var idDesenhoCanvas = req.params.idDesenhoCanvas;

    artworkModel.desenhos(idDesenhoCanvas)
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

function deletarPostagem(req, res) {
    var idPostagem = req.params.idPostagem;

    artworkModel.deletarPostagem(idPostagem)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao deletar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function deletarImagem(req, res) {
    var idImagem = req.params.idImagem;

    artworkModel.deletarImagem(idImagem)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao deletar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function deletarDesenho(req, res) {
    var idDesenho = req.params.idDesenho;

    artworkModel.deletarDesenho(idDesenho)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao deletar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function pesquisar(req, res) {
    artworkModel.pesquisar()
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao deletar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function atualizarComentario(req, res) {
    var id = req.body.id
    artworkModel.atualizarComentario(id)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao deletar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function filtro(req, res) {
    var filtro = req.params.tipoFiltro;

    artworkModel.filtro(filtro)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao trocar o filtro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function imagem(req, res) {
    var imagem = req.body.imagemAtual

    artworkModel.imagem(imagem)
        .then(
            function (resultado) {
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

function ultimaPostagem(req, res) {
    artworkModel.ultimaPostagem()
        .then(
            function (resultado) {
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

function postar(req, res) {
    var id = req.body.id
    var usuario = req.body.usuario
    var imagemAtual = req.body.imagemAtual
    var titulo = req.body.titulo
    var descricao = req.body.descricao
    var capa = req.body.capa

    artworkModel.postar(id, usuario, imagemAtual, titulo, descricao, capa)
        .then(
            function (resultado) {
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

function inserirTag(req, res) {
    var id = req.body.id
    var usuario = req.body.usuario
    var imagemAtual = req.body.imagemAtual
    var tag = req.body.tag

    artworkModel.inserirTag(tag, id, usuario, imagemAtual)
        .then(
            function (resultado) {
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

function comentario(req, res) {
    var idPostagem = req.params.idPostagem

    artworkModel.comentario(idPostagem)
        .then(
            function (resultado) {
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

function comentar(req, res) {
    var user = req.body.fkUser;
    var post = req.body.fkPostagem;
    var dono = req.body.fkDono;
    var imagem = req.body.fkImagem;
    var mensagem = req.body.mensagem

    artworkModel.comentar(user, post, dono, imagem, mensagem)
        .then(
            function (resultado) {
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

function imgPostagem(req, res) {
    var idPostagem = req.params.idPost

    artworkModel.imgPostagem(idPostagem)
        .then(
            function (resultado) {
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

function tags(req, res) {
    var idPostagem = req.params.idPost

    artworkModel.tags(idPostagem)
        .then(
            function (resultado) {
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
    postagem,
    perfil,
    carregar,
    trending,
    desenhos,
    perfill,
    deletarPostagem,
    deletarDesenho,
    seguindo,
    users,
    seusFollows,
    likes,
    curtiu,
    curtidos,
    pesquisar,
    filtro,
    imagem,
    ultimaPostagem,
    postar,
    comentario,
    comentar,
    inserirTag,
    imgPostagem,
    deletarImagem,
    tags,
    atualizarComentario
}