import dotenv from 'dotenv'
import express from 'express'
import connectDatabase from './database/index.js'
dotenv.config({
    path:'.env'
})

const app = express()
connectDatabase()

app.get('/', (req, res)=>{
        res.send("Hello world")
})

const PORT  = process.env.PORT || 8080

app.listen(PORT, ()=>{
    console.log(`App is running on ${PORT}`);
    
})