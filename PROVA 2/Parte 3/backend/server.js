import express from 'express'
import routes from './src/routes/routes.js'
import cors from 'cors'

const app = express()
const port = 8000


app.use(cors({
    origin: '*'
}))

routes(app)
app.get('/', (req, res) => {
    return res.send("A api está rodando!")
})

app.listen(port, () => {
    console.log("O servidor está rodando em http://localhost:8000")
})