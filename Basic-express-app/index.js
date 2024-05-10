require('dotenv').config()

const express = require('express')
// (can also write the above line as) 
// import express from "express"
const app = express()
// const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send("x.com/vaibhav27vds")
})

app.get('/login', (req, res) => {
    res.send('<h1>Please Login</h1>')
})

app.get('/youtubeopen', (req,res) => {
    res.redirect('https://www.youtube/chaiaurcode.com')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
}) 