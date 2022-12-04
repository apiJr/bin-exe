var database = require("../database/config");

function curtidos() {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function curtidos():");
    var instrucao = `
    select distinct top 3 capa, likes, nickname from postagem join usuario on idUsuario = fkUsuario order by likes desc;    
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function dCurtidos() {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function curtidos():");
    var instrucao = `
    select distinct top 3 desenhoBase64, likes, nickname from desenho join usuario on idUsuario = fkUsuario order by likes desc;    
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function visualizados() {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function visualizados():");
    var instrucao = `
    select distinct top 3 capa, visualizacao, nickname from postagem join usuario on idUsuario = fkUsuario order by visualizacao desc;    
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function dVisualizados() {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function visualizados():");
    var instrucao = `
    select distinct top 3 desenhoBase64, visualizacao, nickname from desenho join usuario on idUsuario = fkUsuario order by visualizacao desc;    
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function recentes() {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function recentes():");
    var instrucao = `
    SELECT distinct top 3 CONVERT(VARCHAR(10), dataH, 111) AS dia, capa, nickname from postagem join usuario on idUsuario = fkUsuario order by dia desc;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function dRecentes() {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function recentes():");
    var instrucao = `
    SELECT distinct top 3 desenhoBase64, idDesenho, nickname from desenho join usuario on idUsuario = fkUsuario order by idDesenho desc;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function site() {
    var instrucao = `
    select count(idUsuario) 'usuarios', count(fkUsuario) 'avaliacao', avg(estrelas) 'estrelas' from usuario left join avaliacao on idUsuario = fkUsuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function site2() {
    var instrucao = `
    select count(idDesenho) 'desenhos' from desenho;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function site3() {
    var instrucao = `
    select count(idPostagem) 'postagens', count(idImagem) 'imagens', sum(likes) 'likes', sum(visualizacao) 'visualizacao', sum(comentarios) 'comentarios' from postagem right join imagem on idImagem = fkImagem;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function site4() {
    var instrucao = `
    select top 1 count(fkUsuarioSeguido) 'seguido' from follow group by fkUsuarioSeguido order by seguido desc;    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
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