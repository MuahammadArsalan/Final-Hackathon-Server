
import express from 'express'
import { CreateBeneficiary, getBeneficiary } from '../controllers/beneficiary.controller.js'

const router = express.Router()

router.post('/create', CreateBeneficiary)
router.get('/get', getBeneficiary)

export default router
