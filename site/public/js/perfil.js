
function exibirPortifolio(id){ 

    if(id == 1){
        idEstrutura.style.display = "flex";
        idSobre.style.display = "none";
        idLikes.style.display = "none";
        idSeguindo.style.display = "none";
        idSeguidores.style.display = "none";
    }
    if(id == 2){
        idEstrutura.style.display = "none";
        idSobre.style.display = "flex";
        idLikes.style.display = "none";
        idSeguindo.style.display = "none";
        idSeguidores.style.display = "none";
    }
    if(id == 3){
        idEstrutura.style.display = "none";
        idSobre.style.display = "none";
        idLikes.style.display = "flex";
        idSeguindo.style.display = "none";
        idSeguidores.style.display = "none";
    }
    if(id == 4){
        idEstrutura.style.display = "none";
        idSobre.style.display = "none";
        idLikes.style.display = "none";
        idSeguindo.style.display = "flex";
        idSeguidores.style.display = "none";
    }
    if(id == 5){
        idEstrutura.style.display = "none";
        idSobre.style.display = "none";
        idLikes.style.display = "none";
        idSeguindo.style.display = "none";
        idSeguidores.style.display = "flex";
    }
}
