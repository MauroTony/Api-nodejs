const express = require('express');
const app = express();
const livrosRouter = require('./routes/livros');
const emprestimosRouter = require('./routes/emprestimos');
const userRouter = require('./routes/usuarios')
const autorRouter = require("./routes/autores")
const editoraRouter = require("./routes/editoras")
const env = require('dotenv').config();

// Middleware para permitir o uso de JSON nas requisições
app.use(express.json());
// Rotas
app.use('/livros', livrosRouter);
app.use('/emprestimos', emprestimosRouter);
app.use('/users', userRouter)
app.use('/autores', autorRouter)
app.use('/editores', editoraRouter)

// Porta para o servidor ouvir
const PORT = process.env.PORT || 3000;

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});