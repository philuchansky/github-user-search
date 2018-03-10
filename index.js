const dotenv = require('dotenv').config()
const express = require('express')
const app = express()
const axios = require('axios')
const httpClient = axios.create()
const PORT = 3000


app.get('/users/:username', (req, res) => {
  const options = {
    method: 'get',
    url: `https://api.github.com/users/${req.params.username}?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`
  }

  httpClient(options).then((apiResponse) => {
    res.send(`<h1>${apiResponse.data.name}</h1>`)
  })
})

app.listen(PORT, (err) => {
  console.log(err || `Server running on ${PORT}`)
})