let pincelColor = "black";
let pincelWidth = "5"

document.addEventListener('DOMContentLoaded',() =>{

const pincel ={
    ativo:false,
    movendo:false,
    pos:{x:0, y:0},
    posAnterior: null
}

const tela = document.querySelector('#tela');
const contexto = tela.getContext('2d')

//tamanho do canvas
tela.width = 900;
tela.height = 500;

contexto.strokeStyle = pincelColor;

contexto.lineWidth = pincelWidth;
contexto.rect(0,0,900,500)
contexto.fillStyle = "white";
contexto.fill()

//desenho na tela
const desenharLinha = (linha)=>{

contexto.beginPath();
contexto.moveTo(linha.posAnterior.x, linha.posAnterior.y);
contexto.lineTo(linha.pos.x, linha.pos.y);
contexto.stroke();
}

tela.onmousedown = ()=>{pincel.ativo = true};
tela.onmouseup = ()=>{pincel.ativo = false};

tela.onmousemove = (evento)=>{
    pincel.pos.x = evento.clientX - 270
    pincel.pos.y = evento.clientY - 130
    pincel.movendo = true;
}

const ciclo = () => {
    if(pincel.ativo && pincel.movendo && pincel.posAnterior){
        desenharLinha({pos:pincel.pos, posAnterior: pincel.posAnterior})
        pincel.movendo = false;
    }
    pincel.posAnterior = {x:pincel.pos.x , y:pincel.pos.y}
    setTimeout(ciclo, 10);
}

ciclo()

})


function apagar(){
    const tela = document.querySelector('#tela');
    const contexto = tela.getContext('2d')

    tela.width = 900;
    tela.height = 500;

    contexto.lineWidth = pincelWidth;
    contexto.strokeStyle = pincelColor;

    contexto.clearRect(0, 0, tela.width, tela.height);
    contexto.rect(0,0,900,500)
    contexto.fillStyle = "white";
    contexto.fill()
}

let imgemCanvas = ''

function mudarCor(element){
    const tela = document.querySelector('#tela');
    const contexto = tela.getContext('2d');
    const modal = document.getElementById('modalC');

    pincelColor = element.id;
    contexto.strokeStyle = pincelColor;
    
    modal.classList.remove('mostrar')
}

function mudarTamanho(element){
    const tela = document.querySelector('#tela');
    const contexto = tela.getContext('2d');

    pincelWidth = element.value;
    contexto.lineWidth = pincelWidth;
}
function base64(){
    const tela = document.querySelector('#tela');
    let imagemConvertida = document.querySelector('#imgDesenho');
    let modalU = document.querySelector('.modalUpload')

    modalU.classList.add('show');
    imagemConvertida.src = tela.toDataURL();
}




