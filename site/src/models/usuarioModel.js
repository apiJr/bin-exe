var database = require("../database/config")

function pegarIcon(idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pegarIcon()", idUsuario);
    var instrucao = `
    SELECT nickname, icone FROM usuario WHERE idUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT * FROM usuario WHERE email = '${email}' AND senha = CAST(HASHBYTES('SHA2_256', '${senha}') AS VARCHAR);
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
} 
 
function cadastrar(nickname, senha, email, codigo) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nickname, senha, email);
    
    var instrucao = `
        INSERT INTO usuario (nickname, senha, email, recuperacao) VALUES ('${nickname}', CAST(HASHBYTES('SHA2_256', '${senha}') AS VARCHAR), '${email}', ${codigo});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function seguirUser(seguidor, seguido) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function seguirUser():");
    
    var instrucao = `
        INSERT INTO follow VALUES (${seguidor}, ${seguido});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function atualizarPerfil(nick, desc, icone, fundo, idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function atualizarPerfil(): ");
    var instrucao = `
    update usuario set nickname = '${nick}', icone = '${icone}', descricaoAutor = '${desc}', backgroundImage = '${fundo}' where idUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function avaliacao(idUsuario, msg, estrelas) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function avaliacao(): ");
    var instrucao = `
    insert into avaliacao values (${idUsuario}, '${msg}', ${estrelas});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function deletarAvaliacao(idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletarAvaliacao(): ");
    var instrucao = `
    delete from avaliacao where fkUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function perfilSeguindo(idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function perfilSeguindo(): ");
    var instrucao = `
    select distinct idUsuario, nickname, icone, backgroundImage, descricaoAutor from usuario join follow on idUsuario = fkUsuarioSeguido where fkUsuarioSeguido in (select fkUsuarioSeguido from follow where fkUsuarioSeguidor = ${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function perfilSeguidores(idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function perfilSeguindo(): ");
    var instrucao = `
    select distinct idUsuario, nickname, icone, backgroundImage, descricaoAutor from usuario join follow on idUsuario = fkUsuarioSeguidor where fkUsuarioSeguidor in (select fkUsuarioSeguidor from follow where fkUsuarioSeguido = ${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function newsletter(email) {
    var instrucao = `
    insert into newsletter values ('${email}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function recuperar(email, codigo) {
    var instrucao = `
    SELECT email, recuperacao FROM usuario WHERE email = '${email}' AND recuperacao = ${codigo};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function atualizarSenha(senha, email) {
    var instrucao = `
    update usuario set senha = CAST(HASHBYTES('SHA2_256', '${senha}') AS VARCHAR) where email = '${email}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
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
};
