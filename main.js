import { Jogo } from "./scripts/models/jogo.js";
import { Jogador } from "./scripts/models/jogador.js";
import './scripts/eventos/escolherCarta.js';
import './scripts/eventos/escolherAtributo.js';

export const meuJogo = new Jogo();
const reiniciarBtn = document.querySelector('div.botao')

meuJogo.adicionarJogador(new Jogador("Felipe"));
meuJogo.adicionarJogador(new Jogador("Computador"));

let indexSuperTrunfo = Math.floor(Math.random() * 10)
meuJogo.cartas[indexSuperTrunfo].supertrunfo = true;

meuJogo.embaralharCartas();

reiniciarBtn.addEventListener('click', () =>{
    meuJogo.reiniciar();
})