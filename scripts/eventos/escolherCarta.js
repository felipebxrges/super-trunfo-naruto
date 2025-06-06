import { meuJogo } from "../../main.js";
import { divAtributo, clicou } from "./escolherAtributo.js";


const btnNextJogadorUm = document.querySelector('.jogador1 #next-button')
const btnPrevJogadorUm = document.querySelector('.jogador1 #prev-button')
const imgCartaJogadorUm = document.querySelector('.carta1 img')
const imgCartaJogadorDois = document.querySelector('.carta2 img')

const nomeCartaJogadorUm = document.querySelector('.jogador1 #nome-carta')
const hbtUmJogadorUm = document.querySelector('.jogador1 #hbt1')
const hbtDoisJogadorUm = document.querySelector('.jogador1 #hbt2')
const hbtTresJogadorUm = document.querySelector('.jogador1 #hbt3')
const hbtQuatroJogadorUm = document.querySelector('.jogador1 #hbt4')
const nomeCartaJogadorDois = document.querySelector('.jogador2 #nome-carta')
const hbtUmJogadorDois = document.querySelector('.jogador2 #hbt1')
const hbtDoisJogadorDois = document.querySelector('.jogador2 #hbt2')
const hbtTresJogadorDois = document.querySelector('.jogador2 #hbt3')
const hbtQuatroJogadorDois = document.querySelector('.jogador2 #hbt4')

let contUm = -1;

btnNextJogadorUm.addEventListener('click', () =>{
    if(meuJogo.turnos == 0){
        window.alert("jogo ja acabou");
    }
    else if(clicou == false)
    {
        divAtributo[0].classList.remove('super-trunfo')
        divAtributo[0].classList.remove('display-none')

        contUm++;

        if(contUm > meuJogo.jogadores[0].cartas.length - 1)
            contUm = 0;

        if(meuJogo.jogadores[0].cartas[contUm].supertrunfo)
            divAtributo[0].classList.add('super-trunfo')

        if(meuJogo.jogadores[0].cartas[contUm].supertrunfo)
            divAtributo[0].classList.add('super-trunfo')

        imgCartaJogadorUm.src = meuJogo.jogadores[0].cartas[contUm].img;
        nomeCartaJogadorUm.innerText = meuJogo.jogadores[0].cartas[contUm].nome;
        hbtUmJogadorUm.innerText = meuJogo.jogadores[0].cartas[contUm].chakra;
        hbtDoisJogadorUm.innerText = meuJogo.jogadores[0].cartas[contUm].ninjutsu;
        hbtTresJogadorUm.innerText = meuJogo.jogadores[0].cartas[contUm].taijutsu;
        hbtQuatroJogadorUm.innerText = meuJogo.jogadores[0].cartas[contUm].resistencia;
    }
        
})

btnPrevJogadorUm.addEventListener('click', () =>{
 if(meuJogo.turnos == 0){
        window.alert("jogo ja acabou");
    }
else if(clicou == false){
        divAtributo[0].classList.remove('super-trunfo')
        divAtributo[0].classList.remove('display-none')

        contUm--;
        if(contUm < 0)
            contUm = meuJogo.jogadores[0].cartas.length - 1;

        if(meuJogo.jogadores[0].cartas[contUm].supertrunfo)
            divAtributo[0].classList.add('super-trunfo')

        imgCartaJogadorUm.src = meuJogo.jogadores[0].cartas[contUm].img;
        nomeCartaJogadorUm.innerText = meuJogo.jogadores[0].cartas[contUm].nome;
        hbtUmJogadorUm.innerText = meuJogo.jogadores[0].cartas[contUm].chakra;
        hbtDoisJogadorUm.innerText = meuJogo.jogadores[0].cartas[contUm].ninjutsu;
        hbtTresJogadorUm.innerText = meuJogo.jogadores[0].cartas[contUm].taijutsu;
        hbtQuatroJogadorUm.innerText = meuJogo.jogadores[0].cartas[contUm].resistencia;
        }
})

export { imgCartaJogadorUm ,imgCartaJogadorDois, nomeCartaJogadorDois, hbtDoisJogadorDois, hbtQuatroJogadorDois, hbtUmJogadorDois, hbtTresJogadorDois, contUm }

/*btnNextJogadorDois.addEventListener('click', () =>{
    contDois++;
    if(contDois > meuJogo.jogadores[1].cartas.length - 1)
        contDois = 0;
    imgCartaJogadorDois.src = meuJogo.jogadores[1].cartas[contDois].img;
    nomeCartaJogadorDois.innerText = meuJogo.jogadores[1].cartas[contDois].nome;
    hbtUmJogadorDois.innerText = meuJogo.jogadores[1].cartas[contDois].chakra;
    hbtDoisJogadorDois.innerText = meuJogo.jogadores[1].cartas[contDois].ninjutsu;
    hbtTresJogadorDois.innerText = meuJogo.jogadores[1].cartas[contDois].taijutsu;
    hbtQuatroJogadorDois.innerText = meuJogo.jogadores[1].cartas[contDois].resistencia;
})

btnPrevJogadorDois.addEventListener('click', () =>{
    contDois--;
    if(contDois < 0)
        contDois = meuJogo.jogadores[1].cartas.length - 1;
    imgCartaJogadorDois.src = meuJogo.jogadores[1].cartas[contDois].img;
    nomeCartaJogadorDois.innerText = meuJogo.jogadores[1].cartas[contDois].nome;
    hbtUmJogadorDois.innerText = meuJogo.jogadores[1].cartas[contDois].chakra;
    hbtDoisJogadorDois.innerText = meuJogo.jogadores[1].cartas[contDois].ninjutsu;
    hbtTresJogadorDois.innerText = meuJogo.jogadores[1].cartas[contDois].taijutsu;
    hbtQuatroJogadorDois.innerText = meuJogo.jogadores[1].cartas[contDois].resistencia;
})*/