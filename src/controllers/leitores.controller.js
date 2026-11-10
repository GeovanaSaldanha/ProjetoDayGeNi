import * as service from '../services/leitores.service.js'

export function listar (req, res){
    res.json(service.listar())
}

export async function historico(id){
    res.json(await service.historico(id));
}