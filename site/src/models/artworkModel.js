var database = require("../database/config");

function postagem(idPostagem) { 
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function perfil():", idPostagem);

    var instrucao = `
    SELECT 
    imagemBase64,
    fkImagem,
    fkUsuario,
    icone,
    nickname,
    descricaoAutor,
    titulo,
    descricaoPost,
    likes,
    comentarios,
    visualizacao
FROM
    usuario
        JOIN
    postagem ON idUsuario = fkUsuario
        JOIN
    imagem ON fkImagem = idImagem
WHERE
    idPostagem = ${idPostagem};

    update postagem set visualizacao = (visualizacao + 1) where idPostagem = ${idPostagem};
`;
console.log("Executando a instrução SQL: \n" + instrucao);
return database.executar(instrucao);
}

function perfil(idArtista) { 
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function perfil():", idArtista);

    var instrucao = `
    select distinct idPostagem, backgroundImage, icone, nickname, descricaoAutor, email, capa, titulo 'tituloPost', recuperacao from usuario left join postagem on idUsuario = fkUsuario where idUsuario = ${idArtista};
    `;

console.log("Executando a instrução SQL: \n" + instrucao);
return database.executar(instrucao);
}

function perfill(idArtista) { 
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function perfil():", idArtista);

    var instrucao = `
    select titulo 'tituloDese', desenhoBase64, idDesenho, idUsuario from desenho join usuario on idUsuario = fkUsuario where idUsuario = ${idArtista}; 
    `;

console.log("Executando a instrução SQL: \n" + instrucao);
return database.executar(instrucao);
}

function seguindo(idArtista) { 
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function seguindo():", idArtista);

    var instrucao = `
    select fkUsuarioSeguido from follow where fkUsuarioSeguidor = ${idArtista};
    `;

console.log("Executando a instrução SQL: \n" + instrucao);
return database.executar(instrucao);
}

function users(posicoes) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function users(): ")

    var instrucao = `
    select distinct top 3 capa, backgroundImage, nickname, descricaoAutor from usuario join postagem on idUsuario = fkUsuario where idUsuario in (${posicoes});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
} 

function seusFollows(idPerfil) { 
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function seusFollows():")

    var instrucao = `
    select distinct fkUsuario, capa from postagem where fkUsuario in (select fkUsuarioSeguido from follow where fkUsuarioSeguidor = ${idPerfil}); 
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
 

function carregar(){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function carregar():")

    var instrucao = `
    select distinct top 48 idPostagem, titulo, capa, nickname from postagem join usuario on idUsuario = fkUsuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function trending(){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function trending():")

    var instrucao = `
    select distinct top 12 idPostagem, titulo, capa, nickname, likes from postagem join usuario on idUsuario = fkUsuario order by likes desc;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function desenhos(idDesenhoCanvas) { 
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function desenhos():");

    var instrucao = `
    select desenhoBase64, fkUsuario, titulo, icone, nickname, descricaoAutor, likes, comentarios, visualizacao from desenho join usuario on idUsuario = fkUsuario where idDesenho = ${idDesenhoCanvas};

    update desenho set visualizacao = (visualizacao + 1) where idDesenho = ${idDesenhoCanvas};
`;
console.log("Executando a instrução SQL: \n" + instrucao);
return database.executar(instrucao);
}

function deletarPostagem(idPostagem) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletarPostagem():", idPostagem);
    var instrucao = `
        DELETE FROM postagemCurtida WHERE fkPostagem = ${idPostagem};
        DELETE FROM comentario WHERE fkPostagem = ${idPostagem};
        DELETE FROM postagem_tag WHERE fkPostagem = ${idPostagem};
        DELETE FROM postagem WHERE idPostagem = ${idPostagem};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function deletarImagem(idImagem) {
    var instrucao = `
        DELETE FROM imagem WHERE idImagem = ${idImagem};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function deletarDesenho(idDesenho) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletarDesenho():", idDesenho);
    var instrucao = `
        DELETE FROM desenho WHERE idDesenho = ${idDesenho};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function likes(idArtista, userPostagem, postagemAtual, imagemAtual) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function curtirPostagem():");
    var instrucao = `
        insert into postagemCurtida values
        (${idArtista}, ${postagemAtual}, ${userPostagem}, ${imagemAtual});

        update postagem set likes = (likes + 1) where idPostagem = ${postagemAtual};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function curtiu(idArtista) { 
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function seguindo():", idArtista);

    var instrucao = `
    select fkPostagem from postagemCurtida where fkUsuarioCurtidor = ${idArtista};
    `;

console.log("Executando a instrução SQL: \n" + instrucao);
return database.executar(instrucao);
}

function curtidos(idArtista) { 
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function seguindo():", idArtista);

    var instrucao = `
    select distinct capa, titulo 'tituloPost', nickname, fkPostagem from postagem join usuario on idUsuario = fkUsuario join postagemCurtida on idPostagem = fkPostagem where fkUsuarioCurtidor = ${idArtista};
    `;

console.log("Executando a instrução SQL: \n" + instrucao);
return database.executar(instrucao);
}

function pesquisar() { 
    var instrucao = `
    select distinct capa, titulo 'tituloPost', idPostagem, fkUsuario, nickname from usuario join postagem on idUsuario = fkUsuario;
    `;

console.log("Executando a instrução SQL: \n" + instrucao);
return database.executar(instrucao);
}

function filtro(filtro) {
    if(filtro == 'relevante'){
        var instrucao = `
        select distinct capa, titulo 'tituloPost', idPostagem, fkUsuario, nickname, comentarios from usuario join postagem on idUsuario = fkUsuario order by comentarios desc;
        `;
    }else if(filtro == 'curtido'){
        var instrucao = `
        select distinct capa, titulo 'tituloPost', idPostagem, fkUsuario, nickname, likes from usuario join postagem on idUsuario = fkUsuario order by likes desc;
        `;
    }else if(filtro == 'recente'){
        var instrucao = `
        select distinct capa, titulo 'tituloPost', idPostagem, fkUsuario, nickname, dataH from usuario join postagem on idUsuario = fkUsuario order by dataH desc;
        `;
    }else{
        var instrucao = `
        select distinct capa, titulo 'tituloPost', idPostagem, fkUsuario, nickname, visualizacao from usuario join postagem on idUsuario = fkUsuario order by visualizacao desc;
        `;
    }

console.log("Executando a instrução SQL: \n" + instrucao);
return database.executar(instrucao);
}

function imagem(imagem) { 
    var instrucao = `
    insert into imagem values ('${imagem}');

    select top 1 idImagem from imagem order by idImagem desc;
    `;

console.log("Executando a instrução SQL: \n" + instrucao);
return database.executar(instrucao);
}

function ultimaPostagem() { 
    var instrucao = `
    select top 1 idPostagem from postagem order by idPostagem desc;
    `;

console.log("Executando a instrução SQL: \n" + instrucao);
return database.executar(instrucao);
}

function postar(id, usuario, imagemAtual, titulo, descricao, capa) { 
    var instrucao = `
    insert into postagem (idPostagem, fkUsuario, fkImagem, titulo, descricaoPost, likes, comentarios, visualizacao, capa) values
    (${id}, ${usuario}, ${imagemAtual}, '${titulo}', '${descricao}', 0, 0, 0, '${capa}')
    `;

console.log("Executando a instrução SQL: \n" + instrucao);
return database.executar(instrucao);
}

function inserirTag(tag, id, usuario, imagemAtual) { 
    var instrucao = `
    insert into postagem_tag (fkTag, fkPostagem, fkUsuario, fkImagem) values
    (${tag}, ${id}, ${usuario}, ${imagemAtual});
    `;

console.log("Executando a instrução SQL: \n" + instrucao);
return database.executar(instrucao);
}

function comentario(idPostagem) { 
    var instrucao = `
    select nickname, icone, idUsuario, mensagem from usuario join comentario on idUsuario = fkUsuario_comentario where fkPostagem = ${idPostagem};
    `;

console.log("Executando a instrução SQL: \n" + instrucao);
return database.executar(instrucao);
}

function comentar(user, post, dono, imagem, mensagem) { 
    var instrucao = `
    insert into comentario values
    (${user}, ${post}, ${dono}, ${imagem}, '${mensagem}');
    `;

console.log("Executando a instrução SQL: \n" + instrucao);
return database.executar(instrucao);
}

function imgPostagem(idPostagem) { 
    var instrucao = `
    select fkImagem from postagem where idPostagem = ${idPostagem};
    `;

console.log("Executando a instrução SQL: \n" + instrucao);
return database.executar(instrucao);
}

function tags(idPostagem) { 
    var instrucao = `
    select nome from tag join postagem_tag on idTag = fkTag where fkPostagem = ${idPostagem};
    `;

console.log("Executando a instrução SQL: \n" + instrucao);
return database.executar(instrucao);
}

function atualizarComentario(idPostagem) { 
    var instrucao = `
    update postagem set comentarios = (comentarios + 1) where idPostagem = ${idPostagem};
    `;

console.log("Executando a instrução SQL: \n" + instrucao);
return database.executar(instrucao);
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
    inserirTag,
    comentario,
    comentar,
    imgPostagem,
    deletarImagem,
    tags,
    atualizarComentario
}

