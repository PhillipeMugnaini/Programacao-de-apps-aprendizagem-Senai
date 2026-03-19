class Iten{

    #id
    #title
    #avaible



    constructor(id, title){
        if (new.target === Iten) {
            throw new Error("Não é possível instanciar a classe Iten diretamente");
        }

        this.#id = id;
        this.setTitle(title);
        this.#avaible = true;
    }

    get id(){
        return this.#id;
    }

    get title(){
        return this.#title;
    }

    setTitle(title){
        if(!title || title.trim() === ""){
            throw new Error("Título não pode ser vazio");
        }
        this.#title = title;
    }

    changeTitle(newTitle){
        this.setTitle(newTitle);
    }

    isAvaible(){
        return this.#avaible;
    }

    lendBook(){
        if(!this.isAvaible()){
            throw new Error("Livro não disponível");
        }
        this.#avaible = false;
    }

    returnBook(){
        this.#avaible = true;
    }

    getData(){
        return {
            id: this.#id,
            title: this.#title,
            avaible: this.#avaible
        };
    }
}

class Book extends Iten{

    #author
    
    constructor(id, title, author){
        super(id, title);
        this.setAuthor(author);
    }

    get author(){
        return this.#author;
    }

    setAuthor(author){
        if(!author || author.trim() === ""){
            throw new Error("Autor não pode ser vazio");
        }
        this.#author = author;
    }
}

class Movie extends Iten{

    #duration
    
    constructor(id, title, duration){
        super(id, title);
        this.setDuration(duration);
    }

    get duration(){
        return this.#duration;
    }
    
    setDuration(duration){
        if(duration <= 0){
            throw new Error("Duração deve ser maior que zero");
        }
        this.#duration = duration;
    }
}

const iten1 = new Book(1, "O Senhor dos Anéis", "J.R.R. Tolkien");
const iten2 = new Movie(2, "O Senhor dos Anéis: A Sociedade do Anel", 178);

console.log(iten1.getData());
console.log(iten2.getData());

console.log("-----------------------------");

iten1.lendBook();
iten2.setDuration(180);

console.log(iten1.getData());
console.log(iten2.getData());


