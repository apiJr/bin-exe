var express = require("express");
var router = express.Router();

var artworkController = require("../controllers/artworkController");

router.get("/selectPost", function (req, res) {
    artworkController.postagem(req, res);
});

router.get("/carregar", function (req, res) {
    artworkController.carregar(req, res)
});

router.get("/selectPost/:idPostagem", function (req, res) {
    artworkController.postagem(req, res);
});

router.get("/selectDesenho/:idDesenhoCanvas", function (req, res) {
    artworkController.desenhos(req, res);
});

router.get("/selectPerfil/:idArtista", function (req, res) {
    artworkController.perfil(req, res);
});

router.get("/selectPerfill/:idArtista", function (req, res) {
    artworkController.perfill(req, res);
});

router.get("/selectSeguindo/:idArtista", function (req, res) {
    artworkController.seguindo(req, res);
});
 
router.get("/trending", function (req, res) {
    artworkController.trending(req, res);
});

router.delete("/deletarPostagem/:idPostagem", function (req, res) {
    artworkController.deletarPostagem(req, res);
});

router.delete("/deletarDesenho/:idDesenho", function (req, res) {
    artworkController.deletarDesenho(req, res);
});

router.delete("/deletarImagem/:idImagem", function (req, res) {
    artworkController.deletarImagem(req, res);
});

router.get("/seguindo/:idArtista", function (req, res) {
    artworkController.users(req, res);
})

router.get("/curtiu/:idArtista", function (req, res) {
    artworkController.curtiu(req, res);
})

router.get("/curtidos/:idArtista", function (req, res) {
    artworkController.curtidos(req, res);
})

router.get("/seusFollows/:idPerfil", function (req, res) {
    artworkController.seusFollows(req, res);
})

router.post("/curtirPostagem", function (req, res) {
    artworkController.likes(req, res);
})

router.get("/pesquisar", function (req, res) {
    artworkController.pesquisar(req, res);
})

router.get("/filtro/:tipoFiltro", function (req, res) {
    artworkController.filtro(req, res);
})

router.post("/guardarImagem", function (req, res) {
    artworkController.imagem(req, res);
})

router.get("/ultimaPostagem", function (req, res) {
    artworkController.ultimaPostagem(req, res);
})

router.post("/postar", function (req, res) {
    artworkController.postar(req, res);
})

router.post("/inserirTag", function (req, res) {
    artworkController.inserirTag(req, res);
})

router.get("/comentario/:idPostagem", function (req, res) {
    artworkController.comentario(req, res);
})

router.post("/comentar", function (req, res) {
    artworkController.comentar(req, res);
})

router.get("/imgPostagem/:idPost", function (req, res) {
    artworkController.imgPostagem(req, res);
})

router.get("/tags/:idPost", function (req, res) {
    artworkController.tags(req, res);
})

router.put("/atualizarComentario", function (req, res) {
    artworkController.atualizarComentario(req, res);
})

module.exports = router; 