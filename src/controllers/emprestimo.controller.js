import * as service from '../services/emprestimo.services.js'

export function listar (req, res){
    res.json(service.listar())
}