import * as User from '../models/userModel.js'

//====PERCENTAGEM DE CADA MÓDULO====
//Criar um array com os módulos e a quantidade de exercícios resolvidos para cada um
const exercicios = JSON.parse(localStorage.getItem('exercises'))
const modulos = []
exercicios.forEach(exercicio => {
    if (!modulos.includes(exercicio.modulo)) {
        modulos.push(exercicio.modulo)
    }
});
const total = []
modulos.forEach(modulo => {
    const mod = { tema: `${modulo}`, resolvidos: 0 }
    total.push(mod)
});
const userAtual = User.getUserLogged()
total.forEach(modulo => {
    userAtual.exercicios.forEach(exercicio => {
        if (exercicio.includes(modulo.tema)) {
            modulo.resolvidos += 1
        }
    });
});

//Calcular percentagem para cada módulo
const percentagem = []
total.forEach(modulo => {
    const perc = { tema: `${modulo.tema}`, percentagem: (modulo.resolvidos / (total.length + 1)) * 100 }
    percentagem.push(perc)
});

//Aplicar percentagem na barra de progresso e desbloquear badge
percentagem.forEach(modulo => {
    document.querySelector(`#prog${modulo.tema}`).setAttribute(`style`, `width:${modulo.percentagem}%`)
    if (modulo.percentagem == 100) {
        const img = document.querySelector(`#img${modulo.tema}`)
        img.setAttribute(`src`, `/assets/Badges/${modulo.tema}.png`)
    }
});

document.querySelector('#username').innerHTML = User.getUserLogged().username
document.querySelector('#nivel').innerHTML = `${User.getUserLogged().patente} | Lvl ${User.getUserLogged().nivel}`
document.querySelector('#email').innerHTML = User.getUserLogged().email
document.querySelector('#utilizadorperfil').innerHTML = User.getUserLogged().username
document.querySelector('#avatar').setAttribute('src', User.getUserLogged().avatar)
document.querySelector('#progress').setAttribute('style', `width:${(User.getUserLogged().xp - User.getUserLogged().nivel * 1000) / 10}%`)

document.querySelector('#frmEditar').addEventListener('submit', (event) => {
    event.preventDefault()
    const newPassword = document.querySelector('#txtNewPassword').value
    const newUsername = document.querySelector('#txtNewName').value
    try {
        User.editProfile(newUsername, newPassword)
        displayMessage("msgEditar", "Perfil editado com sucesso!", "success")
        setTimeout(() => {
            location.reload()
        }, 1000)
    } catch (e) {
        displayMessage("msgEditar", e.message, "danger")
    }
})

/*Desbloquear as badges*/
function displayMessage(modal, message, type) {
    const divMessage = document.getElementById(modal);
    divMessage.innerHTML = `<div class="alert alert-${type}" role="alert">${message}</div>`;
    setTimeout(() => {
        divMessage.innerHTML = "";
    }, 2000);
}