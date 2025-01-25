
import express from 'express'
import { createUser } from '../controllers/user.controller.js'
const router = express.Router()


router.post('/register',  createUser)
// router.post('/login',  loginUser)
// router.post('/logout',  logOut)
// router.post('/refreshtoken',  refreshToken)

export default router
