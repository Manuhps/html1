let users;

// CARREGAR UTILIZADORES DA LOCALSTORAGE
export function init() {
  users = localStorage.users ? JSON.parse(localStorage.users) : [];
}

//REMOVER UTILIZADOR
export function remove(index) {
  users.splice(users[index - 1], 1)
  updateLocalStorage()
}

// ADICIONAR UTILIZADOR
export function add(username, email, password, nivel, xp, patente, avatar, profile, exercicios) {
  if (users.some((user) => user.username === username)) {
    throw Error(`User with username "${username}" already exists!`);
  }
  else {
    users.push(new User(username, email, password, nivel, xp, patente, avatar, profile, exercicios));
    localStorage.setItem("users", JSON.stringify(users));
  }
}

//Mudar password
export function editProfile(newUsername, newPassword) {
  const loggedUser = JSON.parse(sessionStorage.getItem("loggedUser"));
  const index = users.findIndex((user) => user.username === loggedUser.username);
  if (newUsername == '' || newPassword == '') {
    throw Error('Nome e passwrod não podem estar vazios!')
  } else {
    users[index].username = newUsername;
    users[index].password = newPassword;
  }

  updateLocalStorage();
  updateLoggedUser(users[index]);


}

//ADICIONAR PONTOS
export function addXP(name, points) {

  users.forEach(user => {
    if (user.username == name) {
      user.xp += points;
      user.nivel = Math.trunc(user.xp / 1000)
      if (user.nivel >= 0 && user.nivel <= 3) {
        user.patente = 'Iniciante'
      }
      else if (user.nivel >= 4 && user.nivel <= 6) {
        user.patente = 'Amador'
      }
      else if (user.nivel >= 7 && user.nivel <= 9) {
        user.patente = 'Profissional'
      }
      else if (user.nivel >= 10) {
        user.patente = 'Lendário'
      }
    }
    updateLocalStorage()
    updateLoggedUser(user)
  })

}

//ADICIONAR EXERCÍCIO RESOLVIDO
export function addExercise(exercise, username, reward) {
  users.forEach(user => {
    if (user.username == username) {
      const confirma = user.exercicios.find(exercicio => exercicio.split("+")[0] == exercise.split("+")[0])

      if (!confirma) {
        user.exercicios.push(exercise)
        addXP(username, reward)
        updateLoggedUser(user)
        updateLocalStorage()
      }
      else {
        alert("Exercício já feito!")
      }
    }
  })

}

//TORNAR ADMIN
export function makeAdmin(index) {
  users[index].profile = "admin"
  updateLocalStorage()
}

// LOGIN DO UTILIZADOR
export function login(username, password) {
  const user = users.find(
    (user) => user.username === username && user.password === password
  );
  if (user) {
    sessionStorage.setItem("loggedUser", JSON.stringify(user));
    return true;
  } else {
    throw Error("Invalid login!");
  }
}

// LOGOUT DO UTILIZADOR
export function logout() {
  sessionStorage.removeItem("loggedUser");
}

// VERIFICA EXISTÊNCIA DE ALGUÉM AUTENTICADO
export function isLogged() {
  return sessionStorage.getItem("loggedUser") ? true : false;
}

// DEVOLVE UTILZIADOR AUTENTICADO
export function getUserLogged() {
  return JSON.parse(sessionStorage.getItem("loggedUser"));
}


// OBTER lista de Users 
export function getUsers() {
  return users;
}


//ATUALIZAR LOCALSTORAGE
function updateLocalStorage() {
  localStorage.setItem("users", JSON.stringify(users));
}


//ATUALIZAR UTILIZADOR ATUAL
function updateLoggedUser(user) {
  sessionStorage.setItem("loggedUser", JSON.stringify(user));
}

/**
 * CLASSE QUE MODELA UM UTILIZADOR NA APLICAÇÃO
 */

class User {
  username = "";
  email = ""
  password = "";
  nivel = 0;
  xp = 0;
  patente = "";
  avatar = "";
  profile = "";
  exercicios = []

  constructor(username, email, password, nivel, xp, patente, avatar, profile, exercicios) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.nivel = nivel;
    this.xp = xp;
    this.patente = patente;
    this.avatar = avatar;
    this.profile = profile
    this.exercicios = exercicios
  }

}