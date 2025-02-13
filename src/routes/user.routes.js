import {Router} from 'express'
import { registeration } from '../controllers/user.controller.js'

const userRouter  = Router()


userRouter.route('/register').post(registeration)

export {userRouter}