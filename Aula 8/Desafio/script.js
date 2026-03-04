const users = [
{ id: 1, name: 'Ana', age: 22, salary: 3500, active: true, role: 'dev' },
{ id: 2, name: 'Carlos', age: 29, salary: 7200, active: false, role: 'manager' },
{ id: 3, name: 'Marina', age: 31, salary: 6800, active: true, role: 'designer' },
{ id: 4, name: 'João', age: 19, salary: 2500, active: true, role: 'dev' },
{ id: 5, name: 'Fernanda', age: 27, salary: 4100, active: false, role: 'designer' },
{ id: 6, name: 'Lucas', age: 35, salary: 9500, active: true, role: 'manager' },
{ id: 7, name: 'Beatriz', age: 24, salary: 3900, active: true, role: 'dev' },
{ id: 8, name: 'Rafael', age: 33, salary: 7800, active: true, role: 'data_analyst' },
{ id: 9, name: 'Juliana', age: 26, salary: 5200, active: true, role: 'data_analyst' },
{ id: 10, name: 'Bruno', age: 41, salary: 11000, active: false, role: 'manager' },
{ id: 11, name: 'Camila', age: 30, salary: 6300, active: true, role: 'designer' },
{ id: 12, name: 'Thiago', age: 28, salary: 4700, active: true, role: 'dev' },
{ id: 13, name: 'Patricia', age: 37, salary: 8800, active: true, role: 'data_analyst' },
{ id: 14, name: 'Gustavo', age: 23, salary: 3100, active: false, role: 'dev' },
{ id: 15, name: 'Larissa', age: 34, salary: 7600, active: true, role: 'manager' }
]

let container1 = document.getElementById('container1')

//Exercicios map

//Criar um array contendo apenas name e role.
const name_Role = users.map((user) =>{
    return "name: "+ user.name + "| Role: " + user.role
})


//Criar um array apenas com os nomes dos usuários.
const names= users.map((user) =>{
    return "Name: " + user.name
})

//Criar um array com os nomes em letras maiúsculas.
const namesUpper= users.map((user) =>{
    return "Name: " + user.name.toUpperCase()
})

//Criar um array adicionando a propriedade salaryAnnual (salário * 12).
const salaryAnnual= users.map((user) =>{
    return "Annual Salary: R$"+ (user.salary * 12)
})

//Criar um array apenas com { name, age }.
const name_age= users.map((user) =>{
    return "Name: "+ user.name + " | Age: " + user.age
})

//Criar um array apenas com { name, salary } com salário formatado em moeda.
const name_salary= users.map((user) =>{
    return{
        name: user.name,
        salary: user.salary.toLocaleString('pt-BR',{
            style: 'currency',
            currency: 'BRL'
        })
    }
})

//Criar um array classificando cada usuário como Júnior, Pleno ou Sênior com base na idade.
const ageRole = users.map((user) => {
    let level;

    if(user.age <= 25){
        level = 'Júnior'
    }else if (user.age<=32){
        level = 'Pleno'
    }else{
        level = 'Sênior'
    }

    return{
        Name: user.name,
        Age: user.age,
        Level: level
    }
})

//Criar um array classificando cada usuário como baixo, médio ou alto com base no salário.
const lvSalary = users.map((user) => {
    let salaryLv;
    
    if (user.salary <= 3000){
        salaryLv = 'Baixo'
    }else if(user.salary <=6000){
        salaryLv = 'Médio'
    }else{
        salaryLv = 'Alto'
    }

    return{
        User: user.name,
        Salary: user.salary,
        Salary_Level: salaryLv
    }
})

//Criar um array contendo apenas { id, name, active }.
const newArray = users.map((user) => {
    return{
        Id: user.id,
        Name: user.name,
        Active: user.active
    }
})



//Exercícios com reduce

//Calcular a soma total dos salários.
const allSalarysValue = users.reduce((acc,user) => {
    return acc + user.salary
},0)

//Calcular a média salarial.
const avgSalary= users.reduce((acc,user) => {
    return acc + user.salary / users.length
},0)

//Calcular a média de idade.
const avgAge= users.reduce((acc,user) => {
    return acc + user.age / users.length
},0)

//Contar quantos usuários estão ativos.
const qtdActiveUser= users.reduce((acc,user) => {
    if(user.active === true){
        return acc + 1
    }
    return acc
},0)

//Contar quantos usuários estão inativos.
const qtdInativeUser= users.reduce((acc,user) => {
    if(user.active === false){
        return acc + 1
    }
    return acc
},0)

//Descobrir o maior salário.
const salaryB= users.reduce((acc,user) => {
    return Math.max(acc,user.salary)
},0)

//Descobrir o menor salário.
const salaryS= users.reduce((acc,user) => {
    return Math.min(acc,user.salary)
},users[0].salary)

//Somar apenas os salários dos usuários ativos.
const allActiveSalary = users.reduce((acc,user) => {
    if(user.active === true){
        return acc + user.salary
    }
    return acc 
},0)


//Desafio(map + filter + reduce)

function createCard(users){
    let div = document.createElement('div')
    let span = document.createElement('span')
    span.innerHTML = `Name: ${users.name} | Age: ${users.age} | Role: ${users.role}`
    div.appendChild(span)

    return div
}

//A média salarial dos usuários ativos.
const avgActiveUser = users.reduce((acc,user) => {
    if(user.active === true){
        return acc + user.salary
    }
    return acc / users.length
},0)


avgActiveUser.forEach(users => {
    const card = createCard(users)
    container1.appendChild(card)
})




console.log(avgActiveUser)