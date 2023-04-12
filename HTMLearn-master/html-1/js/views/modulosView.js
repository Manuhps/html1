import * as User from '../models/userModel.js'

if (User.isLogged()) {
    const elementos = document.querySelector('#elementos')
    elementos.innerHTML = ` <a href="/html/modulos/elementos.html">Elementos</a>`
    const elementos2 = document.querySelector('#elementos2')
    elementos2.innerHTML = ` <a href="/html/modulos/elementos.html" class="btn btn-link btn-block"> Aprende</a>`

    const tabelas = document.querySelector('#tabelas')
    tabelas.innerHTML = ` <a href="/html/modulos/tabelas.html" > Tabelas</a>`
    const tabelas2 = document.querySelector('#tabelas2')
    tabelas2.innerHTML = ` <a href="/html/modulos/tabelas.html" class="btn btn-link btn-block"> Aprende</a>`

    const forms = document.querySelector('#forms')
    forms.innerHTML = ` <a href="/html/modulos/forms.html" > Formulários</a>`
    const forms2 = document.querySelector('#forms2')
    forms2.innerHTML = ` <a href="/html/modulos/forms.html" class="btn btn-link btn-block"> Aprende</a>`

    const media = document.querySelector('#media')
    media.innerHTML = ` <a href="/html/modulos/media.html" > Media</a>`
    const media2 = document.querySelector('#media2')
    media2.innerHTML = ` <a href="/html/modulos/media.html" class="btn btn-link btn-block"> Aprende</a>`

}
else {
    const elementos = document.querySelector('#elementos')
    elementos.innerHTML = ` <a href="#" data-bs-toggle="modal" data-bs-target="#mdlLogin"> Elementos</a>`
    const elementos2 = document.querySelector('#elementos2')
    elementos2.innerHTML = ` <a href="#" data-bs-toggle="modal" data-bs-target="#mdlLogin" class="btn btn-link btn-block"> Aprende</a>`

    const tabelas = document.querySelector('#tabelas')
    tabelas.innerHTML = ` <a href="#" data-bs-toggle="modal" data-bs-target="#mdlLogin"> Tabelas</a>`
    const tabelas2 = document.querySelector('#tabelas2')
    tabelas2.innerHTML = ` <a href="#" class="btn btn-link btn-block" data-bs-toggle="modal" data-bs-target="#mdlLogin"> Aprende</a>`

    const forms = document.querySelector('#forms')
    forms.innerHTML = ` <a href="#" data-bs-toggle="modal" data-bs-target="#mdlLogin"> Formulários</a>`
    const forms2 = document.querySelector('#forms2')
    forms2.innerHTML = ` <a href="#" class="btn btn-link btn-block" data-bs-toggle="modal" data-bs-target="#mdlLogin"> Aprende</a>`

    const media = document.querySelector('#media')
    media.innerHTML = ` <a href="#" data-bs-toggle="modal" data-bs-target="#mdlLogin"> Media</a>`
    const media2 = document.querySelector('#media2')
    media2.innerHTML = ` <a href="#" class="btn btn-link btn-block" data-bs-toggle="modal" data-bs-target="#mdlLogin"> Aprende</a>`
}