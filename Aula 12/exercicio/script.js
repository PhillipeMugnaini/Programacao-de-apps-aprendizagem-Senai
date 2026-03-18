const users = [];

class User {

    #id
    #name
    #email
    #password
    #active

    constructor(id, name, email, password){

        if(new.target === User){
            throw new Error("User não pode ser instanciado diretamente.");
        }

        this.#id = id;
        this.setName(name);
        this.setEmail(email);
        this.setPassword(password);
        this.#active = true;
    }

    get id(){
        return this.#id;
    }

    get name(){
        return this.#name;
    }

    get email(){
        return this.#email;
    }

    setName(name){
        if(!name || name.trim() === ""){
            throw new Error("Nome não pode ser vazio");
        }
        this.#name = name;
    }

    setEmail(email){
        if(!email.includes("@")){
            throw new Error("Email inválido");
        }
        this.#email = email;
    }

    setPassword(password){
        if(password.length < 6){
            throw new Error("Senha deve ter no mínimo 6 caracteres");
        }
        this.#password = password;
    }

    checkPassword(password){
        return this.#password === password;
    }

    deactivate(){
        this.#active = false;
    }

    activate(){
        this.#active = true;
    }

    isActive(){
        return this.#active;
    }

    getData(){
        return {
            id: this.#id,
            name: this.#name,
            email: this.#email,
            active: this.#active
        };
    }
}



class Admin extends User {

    constructor(id, name, email, password){
        super(id, name, email, password);
    }

    listUsers(){
        return users.map(user => user.getData());
    }

    deactivateUser(id){
        const user = users.find(u => u.id === id);
        if(!user){
            throw new Error("Usuário não encontrado");
        }
        user.deactivate();
    }

    activateUser(id){
        const user = users.find(u => u.id === id);
        if(!user){
            throw new Error("Usuário não encontrado");
        }
        user.activate();
    }
}



class Client extends User {

    constructor(id, name, email, password){
        super(id, name, email, password);
    }

    viewMyData(){
        return this.getData();
    }

    updateMyName(name){
        this.setName(name);
    }

    updateMyEmail(email){
        this.setEmail(email);
    }
}



const admin = new Admin(1, "Admin", "admin@email.com", "123456");
const user1 = new Client(2, "Lucas", "lunim@email.com", "123456");
const user2 = new Client(3, "Eduardo", "dudz@email.com", "123456");

users.push(admin, user1, user2);

console.log("LISTA:", admin.listUsers());

admin.deactivateUser(2);
console.log("Lucas ativo?", user1.isActive());

admin.activateUser(2);
console.log("Lucas ativo?", user1.isActive());

console.log("Dados do Lucas:", user1.viewMyData());