import { Router } from 'express'
import * as controller from '../controllers/emprestimo.controlles.js'

const router = Router()
router.get('/', controller.listar())