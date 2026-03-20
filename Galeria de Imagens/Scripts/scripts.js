function adicionarImagem() {
    const input = document.getElementById('imgUrl');
    const url = input.value;
    const galeria = document.getElementById('galeria');

    if (url.trim() === "") {
        alert("Por favor, cole um link de imagem!");
        return;
    }

    // Criar a moldura
    const moldura = document.createElement('div');
    moldura.classList.add('polaroid');

    // Função para remover ao clicar
    moldura.addEventListener('click', function() {
        moldura.remove(); // Remove o elemento do HTML
    });

    // Criar a imagem
    const img = document.createElement('img');
    img.src = url;
    
    // Tratamento de erro (caso o link seja inválido)
    img.onerror = function() {
        alert("Link de imagem inválido!");
        moldura.remove();
    };

    moldura.appendChild(img);
    galeria.appendChild(moldura);

    input.value = "";
}