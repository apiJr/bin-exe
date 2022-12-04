var express = require("express");
var router = express.Router();

var canvasController = require("../controllers/canvasController");

router.post("/guardarCanvas", function (req, res) {
    canvasController.canvasBase64(req, res);
});

router.get("/carregarDesenho", function (req, res) {
    canvasController.carregarDesenho(req, res);
})

router.get("/pesquisar", function (req, res) {
    canvasController.pesquisar(req, res);
})

module.exports = router;