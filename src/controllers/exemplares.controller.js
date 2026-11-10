import * as service from '../services/exemplares.service.js'

export function listar (req, res){
    res.json(service.listar())
}