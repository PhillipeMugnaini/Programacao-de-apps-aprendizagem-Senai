const veiculos = [];

class Veiculo{

    #id
    #marca
    #modelo
    #preco
    #disponivel

    constructor(id, marca, modelo, preco){
        this .#id = id;
        this.setMarca(marca);
        this.setModelo(modelo);
        this.setPreco(preco);
        this.#disponivel = true;
    }

    get id(){
        return this.#id;
    }

    get marca(){
        return this.#marca;
    }

    setMarca(marca){
        if(!marca || marca.trim() === ""){
            throw new Error("Marca não pode ser vazia");
        }
        if(marca.length < 2){
            throw new Error("Marca deve conter no mínimo 2 caracteres");
        }
        this.#marca = marca;
    }

    get modelo(){
        return this.#modelo;
    }

    setModelo(modelo){
        if(!modelo || modelo.trim() === ""){
            throw new Error("Modelo não pode ser vazio");
        }
        if(modelo.length < 2){
            throw new Error("Modelo deve conter no mínimo 2 caracteres");
        }
        this.#modelo = modelo;
    }

    get preco(){
        return this.#preco;
    }

    setPreco(preco){
        if(preco <= 0){
            throw new Error("Preço deve ser maior que zero");
        }
        if(this.#preco && this.#preco !== preco && !this.#disponivel){
            throw new Error("Preço não pode ser alterado após a venda");
        }
        this.#preco = preco;
    }

    get disponivel(){
        return this.#disponivel;
    }

    vender(){
        if(!this.#disponivel){
            throw new Error("Veículo já vendido");
        }
        this.#disponivel = false;
    }

    listVeiculo(){
        return {
            id: this.#id,
            marca: this.#marca,
            modelo: this.#modelo,
            preco: this.#preco,
            disponivel: this.#disponivel
        };
    }
}

class Carro extends Veiculo{

    #portas

    constructor(id, marca, modelo, preco, portas){
        super(id, marca, modelo, preco);
        this.setPortas(portas);
    }

    get portas(){
        return this.#portas;
    }

    setPortas(portas){
        if(isNaN(portas)){
            throw new Error("Portas deve ser um número");
        }
        if(portas <= 0){
            throw new Error("Portas deve ser maior que zero");
        }
        this.#portas = portas;
    }
}

class Moto extends Veiculo{

    #cilindradas

    constructor(id, marca, modelo, preco, cilindradas){
        super(id, marca, modelo, preco);
        this.setCilindradas(cilindradas);
    }

    get cilindradas(){
        return this.#cilindradas;
    }

    setCilindradas(cilindradas){
        if(isNaN(cilindradas)){
            throw new Error("Cilindradas deve ser um número");
        }
        if(cilindradas <= 0){
            throw new Error("Cilindradas deve ser maior que zero");
        }
        if(cilindradas < 50 || cilindradas > 2000){
            throw new Error("Cilindradas deve estar entre 50 e 2000");
        }
        this.#cilindradas = cilindradas;
    }
}

const carro1 = new Carro(1, "Nissan", "March", 31000, 4);
const moto1 = new Moto(2, "Yamaha", "RD350", 30000, 350);

veiculos.push(carro1, moto1);

console.log("========= Veiculos ==========");
console.log(carro1.listVeiculo());
console.log(moto1.listVeiculo());
console.log("=============================");
console.log();

carro1.setPreco(32000);
moto1.setPreco(24000);

carro1.vender();
moto1.vender();

console.log("==== Veiculos após venda ====");
console.log(carro1.listVeiculo());
console.log(moto1.listVeiculo());
console.log("=============================");
console.log();

// console.log("Tentando alterar preço após venda");
// carro1.setPreco(33000);
// moto1.setPreco(25000);

// console.log("Tentativa de venda de veículo já vendido");
// carro1.vender();
// moto1.vender();