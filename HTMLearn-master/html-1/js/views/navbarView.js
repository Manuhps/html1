import * as User from '../models/userModel.js'

function navModal() {
  User.init();
  let nav = `
    
    <div class="modal true" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        
    </div>
    <!-- Modal de login -->
    <div class="modal fade" id="mdlLogin" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Login</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form id="frmLogin">
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="txtUsername">Nome de Utilizador</label>
                            <input type="text" class="form-control" id="txtUsername" />
                        </div>
                        <div class="form-group">
                            <label for="txtPassword">Password</label>
                            <input type="password" class="form-control" id="txtPassword" />
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn" id="btnLogin">Login</button>
                        <button type="button" class="btn" data-bs-dismiss="modal">Close</button>
                    </div>
                </form>
                <div class="row">
                    <div class="col">
                        <div id="msgLogin"></div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <!-- Modal de Register -->
    <div class="modal fade" id="mdlRegister" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Registar</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form id="frmRegister">
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="txtUsernameRegister">Nome de utilizador:</label>
                            <input type="text" class="form-control" id="txtUsernameRegister" />
                        </div>
                        <div class="form-group">
                            <label for="txtEmail">Email:</label>
                            <input type="email" class="form-control" id="txtEmail" />
                        </div>
                        <div class="form-group">
                            <label for="txtPasswordRegister">Password:</label>
                            <input type="password" class="form-control" id="txtPasswordRegister" />
                        </div>
                        <div class="form-group">
                            <label for="txtPasswordRegister2">Confirme a Password:</label>
                            <input type="password" class="form-control" id="txtPasswordRegister2" />
                        </div>
                        <div class="form-group">
                          <label for="genero">Indique o seu genero:</label><br>
                          <input type="radio" id="masculino" value="masculino">
                          <label for="masculino">Masculino</label>
                          <input type="radio" id="feminino" value="feminino">
                          <label for="feminino">Feminino</label>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn">Registar</button>
                        <button type="button" class="btn" data-bs-dismiss="modal">Close</button>
                    </div>
                </form>
                <div class="row">
                    <div class="col">
                        <div id="msgRegister"></div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  `
  let result = `
  <div class="modal-dialog modal-fullscreen">
    <div class="modal-content" id="menu">
        <div class="modal-header">
            <img src="/assets/Simbolo_branco 1.svg">
            <h5 class="modal-title" id="tittle">HTMLearn</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        

            
        
    `


  if (User.isLogged()) {
    if (User.getUserLogged().profile == 'admin') {
      result += `
      <div class="modal-body">
        
        <ul class="list-group list-group-flush" id="lista">
            <a href="/html/sobre.html"><li class="list-group-item">Sobre nós</li></a>
            <a href="/html/modulos.html"><li class="list-group-item">Módulos</li></a>
            <a href="/html/leaderboards.html"><li class="list-group-item">Leaderboards</li></a>
            <a href="/html/playground.html"><li class="list-group-item">Playground</li></a>
            <a href="/html/admin.html"><li class="list-group-item">Menu Admin</li></a>
        </ul>

      </div>
      <div class="modal-footer">
          <a href="/html/perfil.html"><img src="/assets/${User.getUserLogged().avatar}"></a>
          <a href="/html/perfil.html"><p>${User.getUserLogged().username}</p></a>
          
          <button id="btnLogout" class="btn btn-outline-success m-2 my-sm-0">Logout</button>
        </div>
      </div>
    </div>`
    }
    nav = `
    <nav class="navbar navbar-dark ">
      <div class="container-fluid">
          <a id="home" href="/html/homepagelogado.html"><img src="/assets/Simbolo_branco 1.svg"></a>
          <h3 class="modal-title">HTMLearn</h3>

          <button class="navbar-toggler" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <span class="navbar-toggler-icon"></span>
          </button>
      </div>
    </nav>
    ` + nav
    result += `

        <div class="modal-body">
        
          <ul class="list-group list-group-flush" id="lista">
              <a href="/html/sobre.html"><li class="list-group-item">Sobre nós</li></a>
              <a href="/html/modulos.html"><li class="list-group-item">Módulos</li></a>
              <a href="/html/leaderboards.html"><li class="list-group-item">Leaderboards</li></a>
              <a href="/html/playground.html"><li class="list-group-item">Playground</li></a>
          </ul>

        </div>
        <div class="modal-footer">
          <a href="/html/perfil.html"><img src="/assets/${User.getUserLogged().avatar}"></a>
          <a href="/html/perfil.html"><p>${User.getUserLogged().username}</p></a>
          
          <button id="btnLogout" class="btn m-2 my-sm-0">Logout</button>
        </div>
      </div>
    </div>`

  } else {
    nav = `
    <nav class="navbar navbar-dark ">
      <div class="container-fluid">
          <a id="home" href="/index.html"><img src="/assets/Simbolo_branco 1.svg"></a>
          <h3 class="modal-title">HTMLearn</h3>

          <button class="navbar-toggler" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <span class="navbar-toggler-icon"></span>
          </button>
      </div>
    </nav>
    `+ nav

    result += `
        <div class="modal-body">
        
          <ul class="list-group list-group-flush" id="lista">
              <a href="/html/sobre.html"><li class="list-group-item">Sobre nós</li></a>
              <a href="/html/modulos.html"><li class="list-group-item">Módulos</li></a>
              <a href="/html/leaderboards.html"><li class="list-group-item">Leaderboards</li></a>
              <a href="/html/playground.html"><li class="list-group-item">Playground</li></a>
          </ul>

        </div>
        <div class="modal-footer">
          <button class="btn" data-bs-toggle="modal" data-bs-target="#mdlLogin">Login</button>
          <button class="btn " data-bs-toggle="modal" data-bs-target="#mdlRegister">Registar</button>
        </div>
      </div>
  </div>`


  }
  const body = document.querySelector('body')
  body.innerHTML = nav + body.innerHTML
  document.querySelector('#exampleModal').innerHTML = result


  // Carregar botao de registo
  document.querySelector("#frmRegister")?.addEventListener("submit", (event) => {
    event.preventDefault();
    // Gestão do formulário de Registo
    const registerUsername = document.querySelector("#txtUsernameRegister");
    const registerEmail = document.querySelector("#txtEmail")
    const registerPassword = document.querySelector("#txtPasswordRegister");
    const registerPassword2 = document.querySelector("#txtPasswordRegister2");
    let avatar
    if (document.querySelector('#masculino').checked) {
      avatar = '/assets/Avatar_masculino.png'
    } else if (document.querySelector('#feminino').checked) {
      avatar = '/assets/Avatar_feminino.png'
    }


    try {
      if (registerPassword.value !== registerPassword2.value) {
        throw Error("Password and Confirm Password are not equal");
      }
      User.add(registerUsername.value, registerEmail.value, registerPassword.value, 0, 0, 'Iniciante', avatar, 'regular', []);   // adiciona um user SMEPRE como user comum
      displayMessage(
        "msgRegister",
        "Utilizador registado com sucesso!",
        "success"
      );
      // Wait 1 second before reloading, so the user can see the login success message
      setTimeout(() => {
        location.reload();
      }, 1000);
    } catch (e) {
      displayMessage("msgRegister", e.message, "danger");
    }
  });


  // Carregar no botão de login
  document.querySelector("#frmLogin")?.addEventListener("submit", (event) => {
    event.preventDefault();
    try {
      User.login(
        document.getElementById("txtUsername").value,
        document.getElementById("txtPassword").value
      );
      displayMessage("msgLogin", "Login efetuado com sucesso", "success");
      // Wait 1 second before reloading, so the user can see the login success message
      setTimeout(() => {
        location.reload();
        window.location.href = "/html/homepagelogado.html";
      }, 1000);
    } catch (e) {
      displayMessage("msgLogin", e.message, "danger");
    }
  });

  // Carregar botão de logout
  document.querySelector("#btnLogout")?.addEventListener("click", () => {
    User.logout();
    location.reload();
    window.location.href = "/index.html";
  });

}

function displayMessage(modal, message, type) {
  const divMessage = document.getElementById(modal);
  divMessage.innerHTML = `<div class="alert alert-${type}" role="alert">${message}</div>`;
  setTimeout(() => {
    divMessage.innerHTML = "";
  }, 2000);
}
navModal();