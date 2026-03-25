const data = require('./dados.json')

// Gerar uma nova lista contendo apenas os nomes dos produtos
const allNames = data.map((d) =>{
    return d.nome
})

//Gerar uma nova lista de objetos contendo apenas nome, preço e o valor total individual (preço * quantidade)
const namePriceValue = data.reduce((acc,d)=>{
    return acc + `nome: ${d.nome} | preco: ${d.preco} | valor: ${d.preco * d.quantidade}\n`
},0)

// Gerar uma lista contendo apenas os produtos com preço acima de 500
const price500 = data.filter((d)=>{
    return d.preco > 500
})

//Gerar uma lista contendo apenas os produtos com quantidade inferior a 5
const qtd5 = data.filter((d)=>{
    return d.quantidade < 5
})

//Calcular o valor total em estoque considerando todos os produtos
const totalValue = data.reduce((acc,d)=>{
    return acc + d.preco * d.quantidade
},0)

//Calcular o valor total em estoque apenas da categoria "Eletronico"

const electronicValue = data.reduce((acc,d)=>{
    if(d.categoria === "Eletronico"){
        return acc + d.preco * d.quantidade
    }
    return acc
},0)


//Calcular o valor total em estoque apenas dos produtos com quantidade superior a 10
const qtd10Value = data.reduce((acc,d)=>{
    if(d.quantidade > 10){
        return acc + d.preco * d.quantidade
    }
    return acc
},0)

//Identificar o produto com maior valor total em estoque
const mostValuable = data.reduce((max, d) => {
    const value = d.preco * d.quantidade
    const maxValue = max.preco * max.quantidade
    return value > maxValue ? d : max
})

//Identificar o produto com menor valor total em estoque
const leastValuable = data.reduce((min, d) => {
    const value = d.preco * d.quantidade
    const minValue = min.preco * min.quantidade
    return value < minValue ? d : min
})

//Identificar o produto mais caro e o mais barato
const mostExpensive = data.reduce((max, d) => {
    return d.preco > max.preco ? d : max
})

const cheapest = data.reduce((min, d) => {
    return d.preco < min.preco ? d : min
})

//Identificar o produto com maior e menor quantidade
const mostStock = data.reduce((max, d) => {
    return d.quantidade > max.quantidade ? d : max
})

const leastStock = data.reduce((min, d) => {
    return d.quantidade < min.quantidade ? d : min
})

//Calcular a média de preços dos produtos
const avgPrice = data.reduce((acc, d) => {
    return acc + d.preco / data.length
}, 0)

//Calcular a média de valor total em estoque por produto
const avgStockValue = data.reduce((acc, d) => {
    return acc + (d.preco * d.quantidade) / data.length
}, 0)