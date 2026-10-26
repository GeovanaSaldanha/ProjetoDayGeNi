import * as service from '../services/livros.services.js'

export function listar (req, res){
    res.json(service.listar())
}