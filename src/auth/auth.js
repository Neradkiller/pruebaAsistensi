const { Router } = require('express')
const jwt = require('jsonwebtoken');
const User = require('../models/userModel')

const { addUser } = require('../controllers/userController')

const apiAuth = Router()

apiAuth.post('/login', async (req, res) => {
  const user = await User.find(req.body).exec()
  if (user) {
      const accessToken = jwt.sign({email : req.body['email']}, process.env.APP_SECRET, {expiresIn: '7d', issuer: "Neradkiller"})
      res.json({
          accessToken
      });
  } else {
      res.send('Email or password incorrect')
  }
});

apiAuth.post('/signup',addUser);

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization

  if (authHeader) {
      const token = authHeader.split(' ')[1];
      jwt.verify(token, process.env.APP_SECRET, (err, user) => {
          if (err) {
              return res.status(403).json({
                message: "Unauthorized"
              })
          }
          req.user = user
          next()
      });
  } else {
      res.sendStatus(401)
  }
}

module.exports = {apiAuth, authenticateJWT}

