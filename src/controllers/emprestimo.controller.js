import * as service from '../services/emprestimos.service.js'

export function listar (req, res){
    res.json(service.listar())
}

export async function criar(req, res){
     const NovoEmpestimos = req.body;
     try{
         const resultado = await service.criar(NovoEmpretimos);
         res.json(resultado);
     }catch(erro){
         throw new Error('Houve um erro ao criar um novo emprestimo.');
     }
 }

   export async function atualizar(req, res){
    const id = req.params.id;
    const NovoEmpestimos= req.body;
    try{
        const resultado = await service.atualizar(id, NovoEmpretimos);
        res.json(resultado);
    }catch(erro){
        throw new Error('Houve um erro ao atualizar o emprestimo.');
    }
}

export async function listarPorId(req, res){
    const id = req.params.id;
    try{
        const resultado = await service.listarPorId(id);
        res.json(resultado);
    }catch(erro){
        throw new Error('emprestimo não encontrado.');
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
