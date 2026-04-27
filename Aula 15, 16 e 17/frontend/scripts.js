const form = document.getElementById("form")
const formUpdate = document.getElementById("formUpdate")

window.onload = () => {
    carregarUsuarios();
}

form.addEventListener('submit', async (e) =>{
    e.preventDefault()
    const nome = document.getElementById("nome").value
    const email = document.getElementById("email").value
    const senha = document.getElementById("senha").value

    const response = await fetch('http://localhost:8080/registro',{
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email,
            senha: senha
        })
    })

    const data = await response.json();
    console.log(data)
})

formUpdate.addEventListener('submit', async (e) =>{
   e.preventDefault()

    const id = document.getElementById("idUpdate").value
    console.log(id)
    const nome = document.getElementById("nomeUpdate").value
    const email = document.getElementById("emailUpdate").value
    const senha = document.getElementById("senhaUpdate").value

    const response = await fetch(`http://localhost:8080/atualizar/${id}`,{
        method: 'PUT',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email,
            senha: senha
        })
    })

    const data = await response.json();
    console.log(data)
    carregarUsuarios()
})


async function atualizarUsuario(id, nome, email, senha) {
    const idUpdate = document.getElementById("idUpdate")
    const nomeUpdate = document.getElementById("nomeUpdate")
    const emailUpdate = document.getElementById("emailUpdate")
    const senhaUpdate = document.getElementById("senhaUpdate")

    idUpdate.value = id
    nomeUpdate.value = nome
    emailUpdate.value = email
    senhaUpdate.value = senha

}
async function carregarUsuarios() {
    const response = await fetch('http://localhost:8080/usuario');
    const usuarios = await response.json();

    const tbody = document.getElementById('listaUser')

    tbody.innerHTML = ''

    usuarios.forEach(user => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${user.nome}</td>
            <td>${user.email}</td>
            <td>
                <button onclick="deletarUsuario(${user.id})">Deletar</button>
                <button onclick="atualizarUsuario('${user.id}', '${user.nome}', '${user.email}', '${user.senha}')">Atualizar</button>
            </td>
        `

        tbody.appendChild(tr)
    });
    
}

async function deletarUsuario(id) {
    const response = await fetch(`http://localhost:8080/deletar/${id}`, {
        method: 'DELETE',
    })
    carregarUsuarios()
}
