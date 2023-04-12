import * as User from '../models/userModel.js'

document.querySelector('#utilizador').innerHTML = `Bem-Vindo ${User.getUserLogged().username}`
document.querySelector('#avatar').setAttribute('src', User.getUserLogged().avatar)

//Progress bar dos módulos
const userAtual = User.getUserLogged()
userAtual.exercicios.forEach(exercicio => {
    document.querySelector(`#${exercicio.split('+')[0]}`).setAttribute('style', 'background:#EB5E28')
});