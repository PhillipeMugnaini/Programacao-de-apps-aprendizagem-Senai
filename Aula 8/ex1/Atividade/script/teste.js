const pessoas = []

const pessoa1 = {
    name: "Phillipe",
    lastname: "Mugnaini",
    age: 19
}

const pessoa2 = {
    name: "Igor",
    lastname: "Machado",
    age: 20
}

const pessoa3= {
    name: "Erich",
    lastname: "Natal",
    age: 22
}

const pessoa4= {
    name: "Leticia",
    lastname: "Costa",
    age: 20
}

const pessoa5= {
    name: "Pedro",
    lastname: "Marinho",
    age: 20
}

pessoas.push(pessoa1)
pessoas.push(pessoa2)
pessoas.push(pessoa3)
pessoas.push(pessoa4)
pessoas.push(pessoa5)

const AgeFilter = pessoas.filter((p) => p.age <20)
const findIgor = pessoas.find((p)=> p.name == 'Igor')

/*
console.log(AgeFilter)
console.log(findIgor)
console.log(pessoas.indexOf(findIgor))

let container = document.getElementById('container')


function createCard(pessoas){
    let div = document.createElement('div')
    let span = document.createElement('span')
    span.innerHTML = `${pessoas.name} ${pessoas.age}`
    div.appendChild(span)

    return div
}

AgeFilter.forEach(pessoas => {
    const card = createCard(pessoas)
    container.appendChild(card)
})

*/


//Método Reduce -> Reduz o array para um único valor
const arr = [1,2,3,4,5]

const somaArr = arr.reduce((acc, value) => {
    return acc + value
}, 0)

console.log("Soma dos elementos do array >>",somaArr)

const ageAvg = pessoas.reduce((acc,pessoa)=>{
    return acc + pessoa.age / pessoas.length
},0)

console.log("Média das idades das pessoas >> ",ageAvg)

//Método map >> Transforma um array de acordo com uma condição

const arr2 = [1,2,3,4,5]

const mappedArr = arr2.map((arr) => {
    return arr * 2
})

console.log("Array multiplicado por 2 >>",mappedArr)


const mappedPeople = pessoas.map((pessoa) =>{
    return pessoa.name 
})

console.log("Nome de todas as pessoas: \n",mappedPeople)