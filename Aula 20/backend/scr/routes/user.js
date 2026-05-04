import express, { Router } from "express";

const router = express.Router();
const users = ["Diego","Erich","Lucas","Igor"];

router
    .get('/users', (req, res) => {
        res.send(users);
    })

    .post('/users', (req, res) => {
        const {name, lastName} = req.body
        try {
            users.push({name, lastName})
            return res.status(200).send({response: `Usuário ${name} ${lastName} adicionado com sucesso!`})
        } catch{
            return res.status(500).send({response: "Ocorreu um erro ao adicionar o usuário!"})
        }
    })

    .put('/users/:index', (req, res) => {
        const {index} = req.params;
        const {name, lastName} = req.body
        try {
            users[index] = {name, lastName}
            return res.status(200).send({response: `Usuário ${name} ${lastName} editado com sucesso!`})
        } catch{
            return res.status(500).send({response: "Ocorreu um erro ao editar o usuário!"})
        }
    })

    .delete('/users/:index', (req, res) => {
        const {index} = req.params;
        try {
            users.splice(index, 1)
            return res.status(200).send({response: `Usuário deletado com sucesso!`})
        } catch{
            return res.status(500).send({response: "Ocorreu um erro ao deletar o usuário!"})
        }
    })


export default router;