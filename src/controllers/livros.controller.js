import * as service from '../services/livros.service.js'

export function listar (req, res){
    res.json(service.listar())
}

export function criar(req, res){
    const livroNovo = req.body;
    try{
        const resultado = await service.criar(livroNovo);
        res.json(resultado);
    }catch(erro){
        throw new Error('Houve um erro ao criar o livro.');
    }
}