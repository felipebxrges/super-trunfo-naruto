import { meuJogo } from "../../main.js";
import { imgCartaJogadorDois, nomeCartaJogadorDois ,imgCartaJogadorUm, hbtDoisJogadorDois, hbtQuatroJogadorDois, hbtTresJogadorDois, hbtUmJogadorDois, contUm } from "./escolherCarta.js";

const atributos = document.querySelectorAll('.carta1 p#atb');
export const divAtributo = document.querySelectorAll('.atributos')
export let imagensCapturadas;
export let clicou = false;

let atbEscolhido;

atributos.forEach(atributo => {
    atributo.addEventListener('click', () => {
    clicou = true;
     atbEscolhido = atributo.querySelector('span');
     desvirarCarta()
     setTimeout(() => verificaVencedorRound(), 2000)
     meuJogo.turnos--;
    })
})

function verificaVencedorRound(){
    if(ehSuperTrunfo(meuJogo.jogadores[0])){
        capturarCartas(meuJogo.jogadores[0], meuJogo.jogadores[1])
        window.alert("voce ganhou")
    }
    else if(ehSuperTrunfo(meuJogo.jogadores[1])){
        capturarCartas(meuJogo.jogadores[1], meuJogo.jogadores[0])
        window.alert("voce perdeu")
    }
    else
        compararAtributos(atbEscolhido)
    clicou = false;
}

function compararAtributos(atb){
    let atbAdversario = document.querySelector('.carta2 #' +atb.id)
    if(parseInt(atb.innerText) > parseInt(atbAdversario.innerText)){
        capturarCartas(meuJogo.jogadores[0], meuJogo.jogadores[1])
        window.alert("voce ganhou")
    }else{
        capturarCartas(meuJogo.jogadores[1], meuJogo.jogadores[0])
        window.alert("voce perdeu")
    }

}

function capturarCartas(vencedor, perdedor){

    let carta1 = meuJogo.jogadores[0].cartas.find(carta => carta.nome == document.querySelector('.carta1 #nome-carta').innerText)
    let carta2 = meuJogo.jogadores[1].cartas.find(carta => carta.nome == document.querySelector('.carta2 #nome-carta').innerText)
    
    let indicecarta1 = meuJogo.jogadores[0].cartas.indexOf(carta1)
    let indicecarta2 = meuJogo.jogadores[1].cartas.indexOf(carta2)
    
    if(meuJogo.jogadores[0] == vencedor)
        imagensCapturadas = document.querySelector('.jogador1 .cartaspegas')
    else if(meuJogo.jogadores[1] == vencedor)
        imagensCapturadas = document.querySelector('.jogador2 .cartaspegas')

    imagensCapturadas.innerHTML += `<div>
                                        <img src=${carta1.img}></img>
                                        <p>${carta1.nome}</p>
                                    </div>`;
    imagensCapturadas.innerHTML += `<div>
                                        <img src=${carta2.img}></img>
                                        <p>${carta2.nome}</p>
                                    </div>`;

    imgCartaJogadorUm.src = '../../img/cartavirada.jpeg';
    imgCartaJogadorDois.src = '../../img/cartavirada.jpeg';

    divAtributo.forEach(atb => {
        atb.classList.add('display-none')
    })

    vencedor.cartasCapturadas.push(carta1)
    vencedor.cartasCapturadas.push(carta2)  

    vencedor.cartas.splice(indicecarta1,1)
    perdedor.cartas.splice(indicecarta2,1)
    
}

function desvirarCarta(){
    divAtributo[1].classList.remove('display-none')
    divAtributo[1].classList.remove('super-trunfo')

    if(meuJogo.jogadores[1].cartas[contUm].supertrunfo)
        divAtributo[1].classList.add('super-trunfo')

    imgCartaJogadorDois.src = meuJogo.jogadores[1].cartas[contUm].img;
    nomeCartaJogadorDois.innerText = meuJogo.jogadores[1].cartas[contUm].nome;
    hbtUmJogadorDois.innerText = meuJogo.jogadores[1].cartas[contUm].chakra;
    hbtDoisJogadorDois.innerText = meuJogo.jogadores[1].cartas[contUm].ninjutsu;
    hbtTresJogadorDois.innerText = meuJogo.jogadores[1].cartas[contUm].taijutsu;
    hbtQuatroJogadorDois.innerText = meuJogo.jogadores[1].cartas[contUm].resistencia;
}

function ehSuperTrunfo(jogador){
    if(jogador.cartas[contUm].supertrunfo)
        return true;
}