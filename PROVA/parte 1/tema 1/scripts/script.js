var arrProducts = [];

function addProduct() {
    var nome = document.getElementById("nome").value;
    var preco = document.getElementById("preco").value;
    var quantidade = document.getElementById("quantidade").value;

    var product = {
        nome: nome,
        preco: preco,
        quantidade: quantidade
    };

    arrProducts.push(product);
    console.log(arrProducts);
}


console.log(arrProducts);