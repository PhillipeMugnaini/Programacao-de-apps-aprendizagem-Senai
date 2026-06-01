import express, { Router } from 'express'
import { getUsers, createUser, updateUser, deleteUser, getUserBySetor } from '../controllers/userController.js'
import { validateRegister, validateGetUserBySetor } from '../middlewares/userMiddlewares.js'

const router = express.Router()

router
    .get('/', getUsers)
    .get('/find/:setor', validateGetUserBySetor, getUserBySetor)
    .post('/register',validateRegister, createUser)
    .put('/update/:id', updateUser)
    .delete('/delete/:id', deleteUser)

export default router