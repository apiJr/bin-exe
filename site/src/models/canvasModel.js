var database = require("../database/config");

function canvasBase64(base64, id, titulo) { 
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function canvasBase64():");

    var instrucao = `
    INSERT INTO desenho (titulo, desenhoBase64, fkUsuario) VALUES ('${titulo}', '${base64}', ${id});
`;
console.log("Executando a instrução SQL: \n" + instrucao);
return database.executar(instrucao);
}

function carregarDesenho(){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function carregarDesenho():");

    var instrucao = `
    select distinct top 15 desenhoBase64, titulo, idDesenho, nickname from desenho join usuario on idUsuario = fkUsuario order by idDesenho desc;
`;
console.log("Executando a instrução SQL: \n" + instrucao);
return database.executar(instrucao);
}

function pesquisar(){
    var instrucao = `
    select titulo, desenhoBase64, idDesenho, nickname from desenho join usuario on idUsuario = fkUsuario;
`;
console.log("Executando a instrução SQL: \n" + instrucao);
return database.executar(instrucao);
}


module.exports = {
    canvasBase64,
    carregarDesenho,
    pesquisar
}

