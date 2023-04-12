import * as User from '/js/models/userModel.js';
import * as Exercicios from '/js/views/exerciciosView.js';

const tema = document.querySelector("#tema").innerHTML
const exercicios = JSON.parse(localStorage.getItem("exercises")).filter(exercicio => exercicio.modulo == tema);
const quizzes = JSON.parse(localStorage.getItem("quizzes")).filter(quizz => quizz.modulo == tema);

window.onload = () => {
    for (let i = 0; i < exercicios.length; i++) {
        document.querySelector(`#verificarEx${exercicios[i].numero}`).addEventListener("click", () => {
            verificarEx(exercicios[i].numero)
        }
        )
    }
    document.querySelector("#verificarQuizz").addEventListener("click", verificarQuizz);
}



//===============EXERCÍCIOS=====================
function verificarEx(numero) {
    try {
        exercicios.forEach(exercicio => {

            if (exercicio.numero == numero) {
                const respostas = []
                const recompensa = exercicio.recompensa
                for (let i = 0; i < exercicio.respostas.length; i++) {
                    const resp = document.querySelector(`#ex${numero}L${i + 1}`).value
                    respostas.push(resp)            
                }
                let cont = 0
                respostas.forEach((resposta, index) => {
                    if (resposta == exercicio.respostas[index]) {
                        cont += 1
                    }
                });
                if (cont == exercicio.respostas.length) {
                    document.querySelector(`#ex${numero}`).innerHTML = `Exercício ${numero} &check;`
                    if (User.isLogged()) {
                        const userAtual = User.getUserLogged().username
                        const exercicio = `ex${numero}${tema}`;
                        User.addExercise(exercicio, userAtual, recompensa)
                    }
                }
                else {
                    document.querySelector(`#ex${numero}`).innerHTML = `Exercício ${numero} &times;`
                }
            }
        });
    } catch (error) {
        document.querySelector(`#ex${numero}`).innerHTML = `Exercício ${numero} &times;`
    }


}



//===============QUIZZ=====================
function verificarQuizz() {
    try {
        //Respostas do utilizador
        const opcoes = document.querySelectorAll("input[class='quizz']:checked")
        const respostas = []
        opcoes.forEach((quizz) => {
            respostas.push(quizz.value)
        });

        //Respostas corretas & recompensa total
        const respostasCertas = []
        let recompensaTotal = 0
        quizzes.forEach(quizz => {
            respostasCertas.push((quizz.respostaCerta).toString())
            recompensaTotal += quizz.recompensa
        });

        //Verificação geral
        if (JSON.stringify(respostas) == JSON.stringify(respostasCertas)) {
            document.querySelector(`#quizz${tema}`).innerHTML = "Quizz &check;"

            if (User.isLogged()) {
                const userAtual = User.getUserLogged().username
                const exercicio = `quizz${tema}`;
                User.addExercise(`${exercicio}+${Exercicios.stopQuizz()}`, userAtual, recompensaTotal)
            }
        }

        else {
            document.querySelector(`#quizz${tema}`).innerHTML = "Quizz &times;"
        }

        //Verificação de cada linha
        for (let i = 0; i < quizzes.length; i++) {
            if (respostas[i] == respostasCertas[i]) {
                document.querySelector(`#checkQuizz${i + 1}`).innerHTML = "&check;"
            }
            else {
                document.querySelector(`#checkQuizz${i + 1}`).innerHTML = "&times;"
            }
        }
    }

    catch (error) {
        document.querySelector(`#quizz${tema}`).innerHTML = "Quizz &times;"
        for (let i = 0; i < quizzes.length; i++) {
            document.querySelector(`#checkQuizz${i + 1}`).innerHTML = "&times;"
        }
    }
}