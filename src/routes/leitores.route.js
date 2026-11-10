import { Router } from 'express'
import * as controller from '../controllers/leitores.controlles.js'

const router = Router()
router.get('/', controller.listar())