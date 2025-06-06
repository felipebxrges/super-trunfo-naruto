import { Carta } from "./carta.js";
import { imagensCapturadas } from "../eventos/escolherAtributo.js";

export class Jogo{
    constructor(){
        this.jogadores = [];
        this.cartas = [
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
        ],
        this.turnos = 5;
    }

    adicionarJogador(jogador){
        this.jogadores.push(jogador);
    }
    
    embaralharCartas(){
        let nums = [0,1,2,3,4,5,6,7,8,9]

        nums.sort(() => Math.random() - 0.5)


        let i = 0;
        
        nums.forEach(num => {
            if(nums.indexOf(num) == 5)
                i = 1;
            this.jogadores[i].adicionarCartas(this.cartas[num])
        })
    }

    reiniciar(){
        this.jogadores.forEach(j=>{
            j.cartas = [];
            j.cartasCapturada = [];
        })
    
        const capturadasUm = document.querySelector('.jogador1 .cartaspegas')
        const capturadasDois = document.querySelector('.jogador2 .cartaspegas')
        capturadasUm.innerHTML = ''
        capturadasDois.innerHTML = ''

        this.embaralharCartas();
        this.turnos = 5;

        console.log(this.jogadores[0].cartas);
        
    }
}