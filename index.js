const express = require('express')
const cors = require('cors')
const app = express()
const routes = require('./src/routes')

app.use(express.json())
app.use(cors({origin: 'https://brainif.willian17.vercel.app'}))
app.use(routes)

const porta =  process.env.PORT || 3001
app.listen(porta , () =>{
    console.log('Servidor ligado na porta ' + porta)
})  