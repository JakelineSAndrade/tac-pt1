//configuração inicial

const express = require('express')
const mongoose = require('mongoose')
const app = express()

//forma de ler json /middlewares

app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json())

//rota inicial /endpoint
app.get('/', (req, res)=>{

    //mostrar requisicao

    res.json({message: 'Oi express!'})
})

mongoose.connect('mongodb+srv://tac:tac1234@apicluster.zlqe4wl.mongodb.net/bancoapi?retryWrites=true&w=majority')
.then(() => {
    console.log('Conectamos ao MongoDB!')
    app.listen(3000)
  })
  .catch((err) => console.log(err))

//tac1234
//mongodb+srv://tac:tac1234@apicluster.zlqe4wl.mongodb.net/bancoapi?retryWrites=true&w=majority