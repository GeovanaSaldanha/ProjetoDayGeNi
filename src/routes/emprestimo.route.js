import { Router } from 'express'
import * as controller from '../controllers/emprestimo.controlles.js'

const router = Router()
router.get('/', controller.listar())
router.post('/', controller.criar())
router.put('/:id', controller.atualizar())
router.get('/:id', controller.listarPorId())
router.delete('/:id', controller.deletar())

export default router;