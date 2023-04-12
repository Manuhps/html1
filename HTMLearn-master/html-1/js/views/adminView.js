import * as User from '../models/userModel.js'

function renderUsersTable(users) {
  User.init();
  const table = document.querySelector('table')
  table.innerHTML = `
  <tr class = "table-bordered ">
      <th class="col-md-3">UserName</th><th>Perfil</th><th>Acção</th> 
  </tr>
  `;
  // renderizar tabela com base no array de objetos
  let result = ''
  for (let user of users) {
    result += `
              <tr class = 'catRow'>
                  <td>${user.username}</td>
                  <td>${user.profile}</td>
                  <td><button class="btnRemove btn-danger">Remover</button>&nbsp;<button class="tornarAdmin">Tornar admin</button></td> 
                </tr>
          `
  }
  table.innerHTML += result

  const removeButtons = document.querySelectorAll(".btnRemove.btn-danger")
  removeButtons.forEach((button, index) => {
    button.onclick = () => {
      button.parentNode.parentNode.remove()
      User.remove(index)
    }
  });

  const makeAdminButtons = document.querySelectorAll(".tornarAdmin")
  makeAdminButtons.forEach((button, index) => {
    button.onclick = () => {
      User.makeAdmin(index)
      renderUsersTable(User.getUsers())
    }
  })
}

renderUsersTable(User.getUsers())
