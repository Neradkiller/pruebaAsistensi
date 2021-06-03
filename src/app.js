const express = require('express')
const morgan = require('morgan')

const userRoutes = require('./routes/userRoutes')

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(morgan('dev'))

app.use('/api/v1', userRoutes)

app.get('/',(req,res)=>{
    res.status(200).json({
        titulo: 'Prueba tecnica asistensi',
        autor: 'Daren Gonzalez'
    })
})


module.exports = app;