const { Router } = require('express')
const api = Router()

const{
    addUser,
    updateUser,
    deleteUser,
    listUsers,
    getUser} = require('../controllers/userController')

api.get('users/',listUsers)

api.get('users/:userId',getUser)

api.post('users/',addUser)

api.put('users/:userId', updateUser)

api.delete('users/:userId', deleteUser)

module.exports = api