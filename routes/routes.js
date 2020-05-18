const express = require('express')
const users = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')


const User = require('../modals/User')
users.use(cors())

process.env.SECRET_KEY = 'secret'

users.post('/apply', (req, res) => {
  const today = new Date()
  const userData = {
    user_name: req.body.user_name,  
    email: req.body.email,
    mobile:req.body.mobile,
    created: today
  }

  User.findOne({
    email: req.body.email
  })
    .then(user => {
          User.create(userData)
            .then(user => {
              res.json({ status: user.user_name + ' Thanks for applying we will contact to you' })
            })
            .catch(err => {
              res.send('error: ' + err)
            })
        })
    .catch(err => {
      res.send('error: ' + err)
    })
})

module.exports = users
