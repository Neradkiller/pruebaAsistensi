const { Router } = require('express')
const api = Router()

const auth = require('../auth/auth')

const{
    addUser,
    updateUser,
    deleteUser,
    listUsers,
    getUser} = require('../controllers/userController')

api.get('/users',auth.authenticateJWT,listUsers)

api.get('/users/:userId',auth.authenticateJWT,getUser)

api.post('/users',auth.authenticateJWT,addUser)

api.put('/users/:userId',auth.authenticateJWT, updateUser)

api.delete('/users/:userId',auth.authenticateJWT, deleteUser)



module.exports = api