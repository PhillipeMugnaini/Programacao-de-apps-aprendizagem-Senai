const data = require('./data.json')

const totalSum = data.vehicles.reduce((acc,d)=>{
    return acc + d.price_brl
},0)

const avgPrice = data.vehicles.reduce((acc,d)=>{
    return acc + d.price_brl / data.vehicles.length
},0)

const cheapest = data.vehicles.reduce((min, v) => {
    return v.price_brl < min.price_brl ? v : min
})

const mostExpensive = data.vehicles.reduce((max, v) => {
    return v.price_brl > max.price_brl ? v : max
})

const avgHorsepower = data.vehicles.reduce((acc, v) => {
    return acc + v.horsepower
}, 0) / data.vehicles.length

const mostPower = data.vehicles.reduce((max, v) => {
    return v.horsepower > max.horsepower ? v : max
})

const leastPower = data.vehicles.reduce((min, v) => {
    return v.horsepower < min.horsepower ? v : min
})

const avgWeight = data.vehicles.reduce((acc, v) => {
    return acc + v.weight_kg
}, 0) / data.vehicles.length

const heaviest = data.vehicles.reduce((max, v) => {
    return v.weight_kg > max.weight_kg ? v : max
})

const lightest = data.vehicles.reduce((min, v) => {
    return v.weight_kg < min.weight_kg ? v : min
})

console.log(lightest)