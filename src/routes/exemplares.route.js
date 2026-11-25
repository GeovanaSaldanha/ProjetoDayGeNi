import { Router } from 'express'
import * as controller from '../controllers/exemplares.controller.js'

const router = Router()
router.get('/', controller.listar)
router.post('/', controller.criar)
router.delete('/:id', controller.deletar)
router.put('/:id', controller.atualizar)
router.get('/:id', controller.listarPorId)

export default router