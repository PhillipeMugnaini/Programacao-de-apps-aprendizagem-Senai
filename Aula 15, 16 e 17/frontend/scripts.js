const form = document.getElementById("form")
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


async function carregarUsuarios() {
    const response = await fetch('http://localhost:8080/usuario');
    const usuarios = await response.json();

    const tbody = document.getElementById('listaUser')

    usuarios.forEach(user => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${user.nome}</td>
            <td>${user.email}</td>
        `

        tbody.appendChild(tr)
    });
    
}