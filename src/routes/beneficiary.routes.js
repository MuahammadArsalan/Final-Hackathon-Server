
import express from 'express'
import { CreateBeneficiary } from '../controllers/beneficiary.controller.js'

const router = express.Router()

router.post('/ceate',CreateBeneficiary)
export default router
