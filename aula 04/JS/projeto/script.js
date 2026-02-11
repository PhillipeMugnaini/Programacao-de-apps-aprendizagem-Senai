let square = document.getElementById("q1")
let colorInput = document.getElementById("randomColor")

function changeColor(){
    square.style.backgroundColor = colorInput.value
}

colorInput.addEventListener("input", changeColor)
