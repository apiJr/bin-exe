var express = require("express");
var router = express.Router();

var analyticsController = require("../controllers/analyticsController");

router.get("/curtidos", function (req, res) {
    analyticsController.curtidos(req, res);
});

router.get("/dCurtidos", function (req, res) {
    analyticsController.dCurtidos(req, res);
});


router.get("/visualizados", function (req, res) {
    analyticsController.visualizados(req, res);
});

router.get("/dVisualizados", function (req, res) {
    analyticsController.dVisualizados(req, res);
});

router.get("/recentes", function (req, res) {
    analyticsController.recentes(req, res);
});

router.get("/dRecentes", function (req, res) {
    analyticsController.dRecentes(req, res);
});

router.get("/site", function (req, res) {
    analyticsController.site(req, res);
});

router.get("/site2", function (req, res) {
    analyticsController.site2(req, res);
});

router.get("/site3", function (req, res) {
    analyticsController.site3(req, res);
});

router.get("/site4", function (req, res) {
    analyticsController.site4(req, res);
});

module.exports = router;  