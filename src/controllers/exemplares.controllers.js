import * as service from '../services/exemplares.services.js'

export function listar (req, res){
    res.json(service.listar())
}