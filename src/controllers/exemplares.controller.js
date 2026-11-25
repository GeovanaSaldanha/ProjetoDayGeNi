import * as service from '../services/exemplares.service.js'

export function listar (req, res){
    res.json(service.listar())
}

export async function criar(req, res){
     const NovoExemplar = req.body;
     try{
         const resultado = await service.criar(NovoExemplar);
         res.json(resultado);
     }catch(erro){
         throw new Error('Houve um erro ao criar um novo exemplar.');
     }
 }
  export async function atualizar(req, res){
    const id = req.params.id;
    const NovoExemplar= req.body;
    try{
        const resultado = await service.atualizar(id, NovoExemplar);
        res.json(resultado);
    }catch(erro){
        throw new Error('Houve um erro ao atualizar o exemplar.');
    }
}


export async function listarPorId(req, res){
    const id = req.params.id;
    try{
        const resultado = await service.listarPorId(id);
        res.json(resultado);
    }catch(erro){
        throw new Error('exemplar não encontrado.');
    }
}

export async function deletar (req, res){
    const id = req.params.id;
    try{
        const resultado = await service.deletar(id);
        res.json(resultado);
    }catch(erro){
        throw new Error('Não foi possivel deletar.');
    }
}

