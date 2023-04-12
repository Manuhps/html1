class Exercise {
    modulo
    numero
    enunciado = []
    codigoDado
    respostas = []
    dificuldade
    recompensa

    constructor(modulo, enunciado, codigoDado, respostas, dificuldade, recompensa) {
        this.numero = numero
        this.modulo = modulo
        this.ennunciado = enunciado
        this.codigoDado = codigoDado
        this.respostas = respostas
        this.dificuldade = dificuldade
        this.recompensa = recompensa
    }
}

class Quizz {
    modulo
    numero
    dificuldade
    recompensa
    pergunta
    respostas = []
    respostaCerta

    constructor(modulo, dificuldade, recompensa, pergunta, respostas, respostaCerta) {
        this.modulo = modulo
        this.numero = numero
        this.dificuldade = dificuldade
        this.recompensa = recompensa
        this.pergunta = pergunta
        this.respostas = respostas
        this.respostaCerta = respostaCerta
    }
}