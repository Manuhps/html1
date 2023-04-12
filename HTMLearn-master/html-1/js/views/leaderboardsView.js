import * as User from '../models/userModel.js'

const users = User.getUsers()

//Função para ordenar por pontos
function sortByPoints(a, b) {
    return b.xp - a.xp
}

//Gerar leaderboard de pontos
const usersPoints = users.sort(sortByPoints)
usersPoints.forEach(user => {
    document.querySelector("#usersleaderboards").innerHTML += `
    <div class="row mt-2" id="background">
        <div class="col-1 mt-2"align="center">
            <img src="${user.avatar}" class="rounded-circle" id="avatar${user.username}">  
        </div>
        <div class="col-10 mt-3">
            <p id="nome${user.username}" class="nome">${user.username}</p>
        </div>
        <div class="col-1 mt-3">
            <p align="left" id="pontos${user.username}" class="pontos">${user.xp}</p>
        </div>
    </div>
`
});

//Gerar leaderboard de tempo
const modulos = ["Elementos", "Formulários", "Media", "Tabelas"]
const tempos = []
modulos.forEach(modulo => {
    users.forEach(user => {
        if (user.exercicios.some(e => e.startsWith(`quizz${modulo}`))) {
            const tempo = JSON.stringify(user.exercicios.filter(exercicio => exercicio.startsWith(`quizz${modulo}`)))
            const tempo2 = {
                modulo: modulo,
                tempo: tempo.split("+")[1].split('"')[0],
                tempoTotal: calcularTempoTotal(tempo.split("+")[1].split('"')[0]),
                utilizador: user.username
            }
            tempos.push(tempo2)
        }
    });
});

modulos.forEach(modulo => {
    const temposModulo = tempos.filter(tempo => tempo.modulo === modulo)
    temposModulo.sort((a, b) => a.tempoTotal - b.tempoTotal)
    temposModulo.forEach(tempo => {
        users.forEach(user => {
            if (user.username == tempo.utilizador) {
                document.querySelector(`#tempos${modulo}`).innerHTML += `
                <div class="row mt-2" id="background">
                    <div class="col-2 mt-2"align="center">
                        <img src="${user.avatar}" class="rounded-circle" id="avatar${user.username}">  
                    </div>
                    <div class="col-7 mt-3">
                        <p id="nome${user.username}" class="nome">${user.username}</p>
                    </div>
                    <div class="col-1 mt-3">
                        <p align="left" id="tempo${modulo}${user.username}" class="pontos">${tempo.tempo}</p>
                    </div>
                </div>
                `
            }
        });
    });
});

function calcularTempoTotal(tempo) {
    const mins = +tempo.split(":")[0]
    const segs = +tempo.split(":")[1]
    const tempoTotal = (mins * 60) + segs
    return tempoTotal
}