import { response } from "express"
import { connection } from "../database/db.js"

export function validateRegister(req,res, next){
    const{nome, sobrenome, setor, funcao} = req.body

    if(!nome || (nome.length > 45 && nome) || nome.trim() == ""){
        return res.status(400).send({response: "Nome de maneira incorreta"})
    }

    if(!sobrenome || (sobrenome.length > 45 && sobrenome) || sobrenome.trim() == ""){
        return res.status(400).send({response: "Sobrenome de maneira incorreta"})
    }

    if(!setor || setor.trim() == ""){
        return res.status(400).send({response: "Setor é obrigatório"})
    }

    if(!funcao || funcao.trim() == ""){
        return res.status(400).send({response: "Função é obrigatória"})
    }

    next()
}

export function validateGetUserBySetor(req, res, next){
    const { setor } = req.params

    if(!setor || setor.trim() == ""){
        return res.status(400).send({response: "Setor é obrigatório"})
    }

    next()
}