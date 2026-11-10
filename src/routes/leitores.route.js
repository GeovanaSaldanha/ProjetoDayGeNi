import { Router } from 'express'
import * as controller from '../controllers/leitores.controller.js'

const router = Router()
router.get('/', controller.listar())
router.get('/:id/historico', controller.historico())