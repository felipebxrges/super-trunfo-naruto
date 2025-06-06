export class Jogador{
    constructor(nome){
        this.nome = nome
        this.cartas = []
        this.cartasCapturadas = []
    }

    adicionarCartas(carta){
        this.cartas.push(carta);
    }
}