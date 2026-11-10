import * as service from '../services/livros.service.js'

export function listar (req, res){
    res.json(service.listar())
}