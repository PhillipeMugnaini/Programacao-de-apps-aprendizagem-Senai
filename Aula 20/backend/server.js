import express from 'express';
import initRoutes from './scr/routes/routes.js';

const app = express();
const port = 8080;

initRoutes(app);

app.get('/', (req, res) => {
    return res.send("A API está funcionando!");
});

app.listen(port,() => {
    console.log(`Servidor rodando na porta http://localhost:${port}`);
});
