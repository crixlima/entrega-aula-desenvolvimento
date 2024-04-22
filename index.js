import express from 'express'
import bodyParser from 'body-parser'
import userRoutes from './routes/medicos.js'


const app = express()

app.use(bodyParser.json())
app.use("/medicos", userRoutes)

app.get("/", (req, res ) => {
    res.send("Bem vindo a API de Medicos")
}
)

app.listen(3000, () => console.log ("Servidor executando na porta 3000"))