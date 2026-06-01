import { response } from "express"
import { connection } from "../database/db.js"

export const getUsers = (req, res) => {
    const users = connection.query('SELECT * FROM users', (err, results) => {
        if(err){
            return res.status(500).send({response: "Ocorreu algum erro"})
        }
        return res.status(200).send(results)    
    })
}

export const createUser = (req, res) => {
    const { nome, sobrenome, setor, funcao } = req.body
    try{
        connection.query('INSERT INTO users (nome, sobrenome, setor, funcao) VALUES (?, ?, ?, ?)',
            [nome, sobrenome, setor, funcao],
            (err, results) => {
                if(err){
                    return res.status(500).send({response: "Ocorreu algum erro"})
                }
            }
        )
        return res.status(200).send({response: "Usuário registrado!"})

    }catch{
        return res.status(500).send({ response: "Erro ao registrar"})
    }
}

export const updateUser = (req, res) => {
    const { id } = req.params
    const { nome, sobrenome, setor, funcao } = req.body
    try{
        connection.query('UPDATE users SET nome = ?, sobrenome = ?, setor = ?, funcao = ? WHERE id = ?',
            [nome, sobrenome, setor, funcao, id],
            (err, results) => {
                if(err){
                    return res.status(500).send({response: "Ocorreu algum erro"})
                }
            }
        )
        return res.status(200).send({response: "Usuário atualizado!"})

    }catch{
        return res.status(500).send({ response: "Erro ao atualizar"})
    }
}

export const deleteUser = (req, res) => {
    const { id } = req.params
    try{
        connection.query('DELETE FROM users WHERE id = ?',
            [id],
            (err, results) => {
                if(err){
                    return res.status(500).send({response: "Ocorreu algum erro"})
                }
            }
        )
        return res.status(200).send({response: "Usuário deletado!"})

    }catch{
        return res.status(500).send({ response: "Erro ao deletar"})
    }
}

export const getUserBySetor = (req, res) => {
    const { setor } = req.params
    const users = connection.query('SELECT * FROM users WHERE setor = ?', [setor], (err, results) => {
        if(err){
            return res.status(500).send({response: "Ocorreu algum erro"})
        }
        return res.status(200).send(results)
    })
}