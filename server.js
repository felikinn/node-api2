const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require ("mongoose")

const app = express()
let port = 3000

app.listen(port,() =>{
    console.log('servidor rodando na porta ${port}')
})

mongoose.connect ("mongodb+srv://ap1-node2:joaovitor123@cluster0-tj5bj.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
app.use(bodyParser.json())

const users = {

}


app.use ('/',require("./src/models/routes"))