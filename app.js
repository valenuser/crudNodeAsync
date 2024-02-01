const express = require('express')

const app = express()

const morgan = require('morgan')


app.use(morgan('dev'))

app.use(express.urlencoded({extended:false}))

app.use(express.json())

//rutas

app.use('/',require('./routes/index'))

const port = process.env.PORT || 3000

app.listen(port,(req,res)=>{
    console.log(`Server running on port ${port}`);
})