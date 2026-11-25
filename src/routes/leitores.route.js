import { Router } from 'express'
import * as controller from '../controllers/leitores.controller.js'

const router = Router()
router.get('/', controller.listar)
router.get('/:id/historico', controller.historico)
router.post('/', controller.criar)
router.delete('/:id', controller.deletar)
router.put('/:id', controller.atualizar)
router.get('/:id', controller.listarPorId)
export default router
