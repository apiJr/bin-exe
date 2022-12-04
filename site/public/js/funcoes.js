//Função Header

function verificarLogin(){
    var idUsuario = sessionStorage.getItem('IDUSUARIO_USUARIO');
    var icone = sessionStorage.getItem('ICONE_USUARIO');
    var nome = sessionStorage.getItem('NICKNAME_USUARIO');
    var logado = document.querySelector('.logado');
    var deslogado = document.querySelector('.deslogado');

    if(idUsuario != null){
        deslogado.classList.add('esconder');
        logado.classList.remove('esconder');
        userName.innerHTML = nome
        iconeUser.src = icone
        iconeUser2.src = icone
        sessionStorage.fecharModal = 'modalL'
    }else{
        deslogado.classList.remove('esconder');
        logado.classList.add('esconder');
        sessionStorage.removeItem('fecharModal')
    }
}

function perfilUsuario(){
    var idUsuario = sessionStorage.getItem('IDUSUARIO_USUARIO');
    sessionStorage.removeItem('IDPERFIL_USUARIO');
    sessionStorage.IDPERFIL_USUARIO = idUsuario

    window.location = "/perfil.html";
}

//Função Modal Login  

    const botaoLogin = document.querySelector('.liLogin')
    botaoLogin.addEventListener('click', function() {
        sessionStorage.clear()
        iniciarModal('modalL')
    })

    function modalLogin(){
        var login1 = document.querySelector('.userModal')
        login1.classList.toggle('mostrarModal1')
    } 

//Pesquisar

function irPesquisar(){
    var user = sessionStorage.getItem('IDUSUARIO_USUARIO')
    var logado = user != null
    if(logado){
        var textoPesquisa = inPesquisa2.value

        sessionStorage.removeItem('CONTEUDO_PESQUISA')
        sessionStorage.CONTEUDO_PESQUISA = textoPesquisa

        window.location = "./pesquisar.html";

    }else{
        var textoPesquisa = inPesquisa.value

        sessionStorage.removeItem('CONTEUDO_PESQUISA')
        sessionStorage.CONTEUDO_PESQUISA = textoPesquisa

        window.location = "./pesquisar.html";
    }
}