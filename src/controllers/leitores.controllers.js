import * as service from '../services/leitores.services.js'

export function listar (req, res){
    res.json(service.listar())
}