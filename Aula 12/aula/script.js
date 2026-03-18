class Conta{

    #titular
    #saldo
    #senha
    #agencia
    #n_conta

    constructor(titular, saldo, senha, agencia, n_conta){
        this.#titular = titular
        this.#saldo = saldo
        this.#senha = senha
        this.#agencia = agencia
        this.#n_conta = n_conta
    }

    get saldo(){
        return this.#saldo
    }

    depositar(n_conta, agencia, valor){

        

        if(n_conta === this.#n_conta && agencia === this.#agencia){
            valor > this.#saldo ? console.saldo += valor : console.error("O valor deve ser positivo")
        }
        else{
            return console.error("Dados incorretos")
        }
    }
}

const c1 = new Conta("Phillipe",10000,"1234","001","123456")

c1.depositar("123456","001",500)

console.log(c1.saldo)