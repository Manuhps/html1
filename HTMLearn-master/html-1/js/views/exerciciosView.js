import * as User from '/js/models/userModel.js'

const exercicios = JSON.parse(localStorage.getItem("exercises"));
const quizzes = JSON.parse(localStorage.getItem("quizzes"))
const userAtual = User.getUserLogged().username
const tema = document.querySelector("#tema").innerHTML

//Exercícios
exercicios.forEach(exercicio => {
    if (exercicio.modulo == tema) {
        document.querySelector("body").innerHTML += `<h2 id="ex${exercicio.numero}" class="h2exercicio">Exercício ${exercicio.numero}</h2>`
        exercicio.enunciado.forEach(linhaEnunciado => {
            document.querySelector("body").innerHTML += `<p class="pSemMargem">${linhaEnunciado}</p>`
        });
        document.querySelector("body").innerHTML += `<div class="col-5 mt-3" id="retangulo">${exercicio.codigoDado}
        <button class="btn btn-default" id="verificarEx${exercicio.numero}">Verificar</button></div><br><br><br>`
    }
})

//Quizzes
document.querySelector("body").innerHTML += `
<button id="startQuizz">Começar Quizz</button>
<div id="contador">
    <p id="cont">Contador: <span id="min">00</span>:<span id="seg">00</span></p>
</div>
<div id="divQuizz"></div>
`
document.querySelector("#divQuizz").innerHTML += `<h2 id="quizz${tema}">Quizz</h2>`
quizzes.forEach(quizz => {
    if (quizz.modulo == tema) {
        document.querySelector("#divQuizz").innerHTML += `
            <p>${quizz.numero}- ${quizz.pergunta}&nbsp;<span id="checkQuizz${quizz.numero}"></span></p>
            `
        for (let i = 0; i < quizz.respostas.length; i++) {
            document.querySelector("#divQuizz").innerHTML += `
                <input type="radio" name="quizz${quizz.numero}" class="quizz" value="${i + 1}">&nbsp;<label for="${quizz.respostas[i]}">${quizz.respostas[i]}</label><br>
                `
        }

        document.querySelector("#divQuizz").innerHTML += `<br><br>`
    }
});
document.querySelector("#startQuizz").addEventListener("click", startQuizz)
document.querySelector("#divQuizz").innerHTML += `<button class="btn btn-default" id="verificarQuizz">Verificar</button>`

let contador
function startQuizz() {
    document.querySelector("#divQuizz").style.display = "block"
    window.scrollBy(0, 500)
    let min = 0
    let seg = 0
    contador = setInterval(() => {
        seg++
        if (seg == 60) {
            seg = 0
            min++
        }
        document.querySelector("#min").innerHTML = min < 10 ? "0" + min : min
        document.querySelector("#seg").innerHTML = seg < 10 ? "0" + seg : seg
    }, 1000)
}

export function stopQuizz(){
    clearInterval(contador)
    let min = document.querySelector("#min").innerHTML
    let seg = document.querySelector("#seg").innerHTML
    return(min + ":" + seg);
}