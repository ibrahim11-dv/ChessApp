const express = require('express')
const session = require('express-session')
const cors = require('cors')
require('dotenv').config()

const authRoutes = require('./routes/authRoutes')

const app = express()

app.use(cors({
    origin : 'http://localhost:5173',
    credentials : true
}))

app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use(session({
    secret : process.env.SESSION_SECRET,
    resave : false,
    saveUninitialized : false,
    cookie :{
        secure : false,
        httpOnly : true,
        maxAge : 1000 * 60 * 60 * 24 * 7
    }
}))

app.use('/api/auth', authRoutes)

app.get('/', (req,res)=>{
    res.json({
        msg : "server is running"
    })
})

module.exports = app