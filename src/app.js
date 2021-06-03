const express = require('express')
const userRoutes = require('./routes/userRoutes')

const app = express()

app.use('api/v1/', userRoutes)

app.get('/',(req,res)=>{
    res.status(200).json({
        titulo: 'Prueba tecnica asistensi',
        autor: 'Daren Gonzalez'
    })
})

//app.use(express.json)

module.exports = app;