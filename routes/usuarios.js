const express = require("express");
const router = express.Router();

const usuarioController = require("../controller/usuarioController");


router.get("/classificar", function (req,res){
    usuarioController.classificar(req,res)
});

router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

router.post("/registrar", function (req, res) {
    usuarioController.registrar(req, res);
});

module.exports = router;