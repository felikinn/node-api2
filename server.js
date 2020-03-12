const express = require('express')

const app= express()
let port = 3000

app.listen(port,() =>{
    console.log('servidor rodando na porta ${port}')
})

app.get('/',(req,res) => {
    res.send ("minha primeira rota")

})