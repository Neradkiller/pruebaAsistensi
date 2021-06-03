const user = require('../models/userModel')

async function addUser(req,res){
    try {
        const{
            firstName,
            lastName,
            cedula,
            birthdate,
            phoneNumber,
            email
        } = req.body

        const user = user({
            firstName,
            lastName,
            cedula,
            birthdate,
            phoneNumber,
            email
        })

        const storedUser = await user.save()

        res.status(201).json({
            message: 'User successfully created',
            data: storedUser
        })
    } 
    catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'An error has occurred, please try again later.',
            date: 'No data'
        })
    }
}

function updateUser(req,res){
    try {
     
    } 
    catch (error) {
        res.status(500).json({
            message: 'An error has occurred, please try again later.',
            date: 'No data'
        })
    }
}

function deleteUser(req,res){
    try {
     
    } 
    catch (error) {
        res.status(500).json({
            message: 'An error has occurred, please try again later.',
            date: 'No data'
        })
    }
}

function listUsers(req,res){
    try {
     
    } 
    catch (error) {
        res.status(500).json({
            message: 'An error has occurred, please try again later.',
            date: 'No data'
        })
    }
}

function getUser(req,res){
    try {
     
    } 
    catch (error) {
        res.status(500).json({
            message: 'An error has occurred, please try again later.',
            date: 'No data'
        })
    }
}

module.exports = {
    addUser,
    updateUser,
    deleteUser,
    listUsers,
    getUser
}