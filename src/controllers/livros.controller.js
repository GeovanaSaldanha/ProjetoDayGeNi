import * as service from '../services/livros.service.js'

export async function listar (req, res){
    res.json(await service.listar())
}

export async function criar(req, res){
    const livroNovo = req.body;
    try{
        const resultado = await service.criar(livroNovo);
        res.json(resultado);
    }catch(erro){
        throw new Error('Houve um erro ao criar o livro.');
    }
}

export async function atualizar(req, res){
    const id = req.params.id;
    const livroNovo = req.body;
    try{
        const resultado = await service.atualizar(id, livroNovo);
        res.json(resultado);
    }catch(erro){
        throw new Error('Houve um erro ao atualizar o livro.');
    }
}
 
export async function listarPorId(req, res){
    const id = req.params.id;
    try{
        const resultado = await service.listarPorId(id);
        res.json(resultado);
    }catch(erro){
        throw new Error('livro não encontrado.');
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