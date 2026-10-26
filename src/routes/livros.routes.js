import { Router } from 'express'
import * as controller from '../controllers/livros.controlles.js'

const router = Router()
router.get('/', controller.listar())