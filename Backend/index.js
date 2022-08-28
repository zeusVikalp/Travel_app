const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = express()

dotenv.config()

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser : true}).then(() => {
    console.log('MongoDB connect')
}).catch((err) => {
    console.log(err)
})


app.listen(9999,() => {
    console.log('Backend server is running')
})