export class Jogador{
    constructor(nome){
        this.nome = nome
        this.cartas = []
        this.cartasCapturadas = []
        this.roundsGanhos = 0;
    }

    adicionarCartas(carta){
        this.cartas.push(carta);
    }
}