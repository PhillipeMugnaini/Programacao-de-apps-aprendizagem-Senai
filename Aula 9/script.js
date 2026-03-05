// const pessoa = require('./data.json')

// const pessoas = pessoa.filter((pessoa) => {
//     return pessoa.salary == 1234
// })

// const pais = pessoa.map((p)=>{
//     return {name: p.name, parents: p.parents}
// })

// console.log(pais)
let data =[]

const fetchData = async () => {
    const people = await fetch('https://jsonplaceholder.typicode.com/users/')
    const data = await people.json()
    console.log(data)
}

fetchData()

