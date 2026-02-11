function somar(){

    let numero1 = Number(document.getElementById("n1").value)
    let numero2 = Number(document.querySelector("#n2").value)

    //console.log(numero1 + numero2) 
    //alert(numero1+numero2)

    let resposta = document.querySelector("#resposta")
    let soma = numero1 + numero2
    resposta.innerHTML = soma
   
}



function alterarImagem(){

    let imagem = document.getElementById("imagem")

    imagem.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQMK4YP98CW-92aAACjk14L49Jb1Qne9T-lA&s")
}