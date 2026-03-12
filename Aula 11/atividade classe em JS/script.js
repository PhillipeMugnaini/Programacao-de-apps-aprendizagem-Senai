class Automovel{

    modelo
    marca
    cor
    ano
    motor

    constructor(modelo,marca,cor,ano,motor){
        this.modelo = modelo
        this.marca = marca
        this.cor = cor
        this.ano = ano
        this.motor = motor
    }

    acelerar(){
        return `O veículo ${this.marca} ${this.modelo} está acelerando`
    }

    frear(){
        return `O veículo ${this.marca} ${this.modelo} está freando`
    }

    esterçar(lado){
        return `O veículo ${this.marca} ${this.modelo} está virando para a ${lado}`
    }
}

const veiculo1 = new Automovel("Fiesta", "Ford", "Branco", 2015, "1.5L")
console.log(veiculo1.acelerar())

const veiculo2 = new Automovel("March", "Nissan", "Branco", 2013, "1.0L")
console.log(veiculo2.acelerar())

class Pessoa{

    nome
    idade
    profissao

    constructor(nome,idade,profissao){
        this.nome = nome
        this.idade = idade
        this.profissao = profissao

    }

    falar(){
        return `A pessoa ${this.nome} está falando`
    }

    andar(){
        return `A pessoa ${this.nome} está andando`
    }

    apresentar(){
        return `A pessoa ${this.nome} com ${this.idade} anos está se apresentando`
    }


}

const pessoa1 = new Pessoa("Neymar", 35,"Jogador")
const pessoa2 = new Pessoa("Cebolinha", 7,"Ditador")
console.log(pessoa1.apresentar())

class Animal{
    nome
    especie
    idade
    peso

    constructor(nome,especie,idade,peso){
        this.nome = nome
        this.especie = especie
        this.idade = idade
        this.peso = peso
    }

    comer(){
        return `O animal ${this.especie} com o nome ${this.nome} está comendo `
    }

    dormir(){
        return `O animal ${this.especie} com o nome ${this.nome} está dormindo`
    }

    emitirSom(){
        return `O animal ${this.especie} com o nome ${this.nome} está emitindo som`
    }
}

const animal1 = new Animal("Gmail", "Cachorro", 1, 2)
console.log(animal1.emitirSom())

class Produto{
    nome
    preco
    categoria
    marca

    constructor(nome,preco,categoria,marca){
        this.nome = nome
        this.preco = preco
        this.categoria = categoria
        this.marca = marca
    }

    vender(){
        return `O produto ${this.nome} com o preço R$ ${this.preco} foi vendido`
    }

    comprar(){
        return  `O produto ${this.nome} com o preço R$ ${this.preco} foi comprado`
    }

    informacao(){
        return `As informações do produto ${this.nome} são:\nMarca: ${this.marca}\nPreço: R$ ${this.preco}\nCategoria: ${this.categoria}`
    }
}

const produto1 = new Produto("Amaciante", 15.50, "Produto de Limpeza","Soft")
console.log(produto1.informacao())


class Carro extends Automovel{
    abrirPortas(){
        return "Abrindo as portas!"
    }
}

class Motos extends Automovel{
    grau(){
        return "Olha o grau"
    }
}

const carro = new Carro("Kwid", "Renault", "Amarelo", 2018, "1.0L")
const moto = new Motos("DT180", "Yamaha", "Branco",1981, "180cc")

console.log(carro.acelerar())
console.log(carro.abrirPortas())

console.log(moto.acelerar())
console.log(moto.grau())

class Jogador extends Pessoa{
    gol(){
        return "Gooooooooooooolllllllllll!!!!!!!!!"
    }
}

class Ditador extends Pessoa{
    ameacar(){
        return "Sequestrei sua familia kakakakakakakakaka"
    }
}

const jogador = new Jogador("Neymar", 33, "Jogador")
const ditador = new Ditador("Cebolinha", 7, "Ditador")

console.log("------------------------")
console.log(jogador.apresentar())
console.log(jogador.gol())

console.log(ditador.apresentar())
console.log(ditador.ameacar())