import { Carta } from "./scripts/models/carta.js"

const btnNext = document.querySelector('.seta-direita')
const btnPrev = document.querySelector('.seta-esquerda')
const img = document.querySelector('.carta img')

const nome = document.querySelector('#nome-carta')
const atb1 = document.querySelector('#atb1')
const atb2 = document.querySelector('#atb2')
const atb3 = document.querySelector('#atb3')
const atb4 = document.querySelector('#atb4')

let cont = -1;

let cartas = [
    new Carta("Madara", 190, 200, 190, 170, "img/personagens/madara.png"),
    new Carta("Nagato", 165, 180, 130, 150, 'img/personagens/nagato.jpg'),
    new Carta("Minato", 180, 175, 150, 160, "img/personagens/minato.jpg"),
    new Carta("Tobi", 160, 170, 165, 165, "img/personagens/tobi.jpg"),
    new Carta("Hashirama", 190, 195, 155, 200, "img/personagens/hashirama.jpg"),
    new Carta("Sasuke", 185, 185, 185, 165, "/img/personagens/sasuke.jpg"),
    new Carta("Itachi", 155, 165, 170, 130, "img/personagens/itachi.jpg"),
    new Carta("Guy", 170, 100, 200, 180, "img/personagens/gai.jpg"),
    new Carta("Naruto", 200, 180, 180, 175, "img/personagens/naruto.jpg"),
    new Carta("Kakashi", 150, 185, 175, 160, "img/personagens/kakashi.jpg"),
]

btnNext.addEventListener('click', () => {
    cont++;
    if(cont > cartas.length - 1)
        cont = 0;

    img.src = cartas[cont].img;
    nome.innerText = cartas[cont].nome;
    atb1.innerText = cartas[cont].chakra;
    atb2.innerText = cartas[cont].ninjutsu;
    atb3.innerText = cartas[cont].taijutsu;
    atb4.innerText = cartas[cont].resistencia;
})

btnPrev.addEventListener('click', () => {
    cont--;
    if(cont < 0)
        cont = cartas.length - 1;

    img.src = cartas[cont].img;
    nome.innerText = cartas[cont].nome;
    atb1.innerText = cartas[cont].chakra;
    atb2.innerText = cartas[cont].ninjutsu;
    atb3.innerText = cartas[cont].taijutsu;
    atb4.innerText = cartas[cont].resistencia;
})



