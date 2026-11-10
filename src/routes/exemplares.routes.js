import { Router } from 'express'
import * as controller from '../controllers/exemplares.controlles.js'

const router = Router()
router.get('/', controller.listar())