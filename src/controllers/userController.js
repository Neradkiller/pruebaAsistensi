const User = require('../models/userModel')

async function addUser(req,res){
    try {
        const{
            firstName,
            lastName,
            birthdate,
            phoneNumber,
            email,
            password
        } = req.body

        const user = User({
            firstName,
            lastName,
            birthdate,
            phoneNumber,
            email,
            password
        })

        const validateUser = await User.findOne( {email:user.email})
                   
        console.log(validateUser)
        if(validateUser){
            res.status(200).json({
                message: 'The user already exist'
            }) 
        }
        else{
            const storedUser = await user.save()

            res.status(201).json({
                message: 'User successfully created',
                data: storedUser
            })
        }
    } 
    catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'An error has occurred, please try again later.',
            date: 'No data'
        })
    }
}

async function updateUser(req,res){
    try {
        await User.updateOne({_id: req.params['userId']},req.body)
        res.status(200).json({
            message: `User with id:${req.params['userId']} updated`
        })
    } 
    catch (error) {
        res.status(500).json({
            message: 'An error has occurred, please try again later.',
            date: 'No data'
        })
    }
}

async function deleteUser(req,res){
    try {
        await User.deleteOne({_id: req.params['userId']}).exec()
        res.status(200).json({
            message: 'User sucefully deleted'
        })
    } 
    catch (error) {
        res.status(500).json({
            message: 'An error has occurred, please try again later.',
            date: 'No data'
        })
    }
}

async function listUsers(req,res){
    try {
        const users = await User.find().lean().exec()
        res.status(200).json({
            data: users
        })
    } 
    catch (error) {
        res.status(500).json({
            message: 'An error has occurred, please try again later.',
            date: 'No data'
        })
    }
}

async function getUser(req,res){
    try {
        let findedUser = await User.findById(req.params['userId'])
        if(findedUser)
            res.status(200).json({
                message: 'User finded',
                data: findedUser
            })
        else
        res.status(200).json({
            message: 'User not found',
            data: findedUser
        })
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