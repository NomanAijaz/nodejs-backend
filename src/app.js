import cors from 'cors'
import express from 'express'
import cookieParser from 'cookie-parser'
import { userRouter } from './routes/user.routes.js'

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN
}))

app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
app.use(cookieParser())
app.use('/api/user', userRouter)

export {app}