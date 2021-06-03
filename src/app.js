const express = require('express')
const morgan = require('morgan')

const userRoutes = require('./routes/userRoutes')
const auth = require('./auth/auth')

const app = express()

app.use(express.json())
app.use(morgan('dev'))

app.use('/api/v1', userRoutes)
app.use('/api/v1',auth.apiAuth)

app.get('/',(req,res)=>{
    res.status(200).json({
        titulo: 'Prueba tecnica asistensi',
        autor: 'Daren Gonzalez'
    })
})


module.exports = app;