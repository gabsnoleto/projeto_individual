var usuarioModel = require("../models/usuarioModels");

function entrar(req, res) {
    var usuario = req.body.usuarioServer;
    var senha = req.body.senhaServer;

    if (!usuario) {
        res.status(400).send("Seu usuario está undefined!");
    } else if (!senha) {
        res.status(400).send("Sua senha está indefinida!");
    } else {
        
        usuarioModel.entrar(usuario, senha)
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

function cadastrar(req, res) {
    var usuario = req.body.usuarioServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (!usuario) {
        res.status(400).send("Seu nome está undefined!");
    } else if (!email) {
        res.status(400).send("Seu email está undefined!");
    } else if (!senha) {
        res.status(400).send("Sua senha está undefined!");
    } else {
        
        usuarioModel.cadastrar(usuario, email, senha)
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

function registrar(req, res) {
    var fk_usuario = req.body.idServer;
    var pontos = req.body.pontosServer;


    if (!fk_usuario) {
        res.status(400).send("Seu nome está undefined!");
    } else if (pontos == 0) {
        res.status(400).send("Seu email está undefined!");
    }else{
        
        usuarioModel.registrar(fk_usuario,pontos)
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

function classificar(req, res) {
    usuarioModel.classificar().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


module.exports = {
    entrar,
    cadastrar,
    registrar,
    classificar //nova
}