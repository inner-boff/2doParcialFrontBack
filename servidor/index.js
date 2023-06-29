const express = require('express');
const app = express();
const PORT = 3000;
const conectarDB = require('./config/db');
const cors = require("cors");

conectarDB();

app.use(cors());

app.use(express.json());

app.get('/', (req,res) => {
    res.send('<h1>Hola! Soy un servidor creado con Express 💻</h1>')
})


const router = require('./routes/destino');
app.use('/api/destinos', router)



app.get('/api/destinos', (req,res) => {
    res.send('<h1>Hola API</h1>')
})



app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})
