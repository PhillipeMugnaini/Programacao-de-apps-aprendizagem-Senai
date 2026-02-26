
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

const activeUser = users.filter((u) => u.active == true)
const inativeUser = users.filter((u) => u.active == false)
const devUsers = users.filter((u) => u.role == 'dev')
const designerUsers = users.filter((u) => u.role == 'designer')
const managerUsers = users.filter((u) => u.role == 'manager')
const data_analystUser = users.filter((u) => u.role == 'data_analyst')
const _5000User = users.filter((u)=> u.salary > 5000)
const _4000User = users.filter((u)=> u.salary < 4000)
const age30User = users.filter((u)=> u.age > 30)
const age25User = users.filter((u)=> u.age > 25)
const dataAnalyst_active = users.filter((u)=> u.role == 'data_analyst' & u.active == true)
const devSalary_4000 = users.filter((u)=> u.role == 'dev' & u.salary > 4000)
const managerAge30 = users.filter((u)=> u.age > 30 & u.role == 'manager')

let container1 = document.getElementById('container1')
let container2 = document.getElementById('container2')
let container3 = document.getElementById('container3')
let container4 = document.getElementById('container4')
let container5 = document.getElementById('container5')
let container6 = document.getElementById('container6')
let container7 = document.getElementById('container7')
let container8 = document.getElementById('container8')
let container9 = document.getElementById('container9')
let container10 = document.getElementById('container10')
let container11 = document.getElementById('container11')
let container12 = document.getElementById('container12')
let container13 = document.getElementById('container13')


function createCard(users){
    let div = document.createElement('div')
    let span = document.createElement('span')
    span.innerHTML = `Name: ${users.name} | Age: ${users.age} | Role: ${users.role}`
    div.appendChild(span)

    return div
}

activeUser.forEach(users => {
    const card = createCard(users)
    container1.appendChild(card)
})

inativeUser.forEach(users => {
    const card = createCard(users)
    container2.appendChild(card)
})

devUsers.forEach(users => {
    const card = createCard(users)
    container3.appendChild(card)
})

designerUsers.forEach(users => {
    const card = createCard(users)
    container4.appendChild(card)
})

managerUsers.forEach(users => {
    const card = createCard(users)
    container5.appendChild(card)
})

data_analystUser.forEach(users => {
    const card = createCard(users)
    container6.appendChild(card)
})

_5000User.forEach(users => {
    const card = createCard(users)
    container7.appendChild(card)
})

_4000User.forEach(users => {
    const card = createCard(users)
    container8.appendChild(card)
})

age30User.forEach(users => {
    const card = createCard(users)
    container9.appendChild(card)
})

age25User.forEach(users => {
    const card = createCard(users)
    container10.appendChild(card)
})

dataAnalyst_active.forEach(users => {
    const card = createCard(users)
    container11.appendChild(card)
})

devSalary_4000.forEach(users => {
    const card = createCard(users)
    container12.appendChild(card)
})

managerAge30.forEach(users => {
    const card = createCard(users)
    container13.appendChild(card)
})