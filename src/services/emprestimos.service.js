// src/services/emprestimo.service.js
import * as model from '../model/emprestimo.model.js';

export class ErroDeValidacao extends Error {
  constructor(mensagem) {
    super(mensagem);
    this.name = 'ErroDeValidacao';
  }
}

export async function listar() {
  const documentos = await model.buscarTodas();
  return documentos
}

export async function criar({ idLivro, idLeitor,dataEmprestimo }) {
  if (!idLivro) {
     throw new ErroDeValidacao('O id é obrigatório.');
   }
 
   if (!idLeitor) {
     throw new ErroDeValidacao('O LivroId é obrigatório.');
   }
  if (!dataEmprestimo) {
     throw new ErroDeValidacao('O situação é obrigatório.');
   }
 
   const NovoExemplar = {
     idLivro: idLivro.trim(),
     idLeitor: idLeitor.trim(),
     dataEmprestimo: dataEmprestimo.trim(),
    
   };
   const insertedId = await model.inserir(NovoEmprestimo);
   return { _id: insertedId, ...NovoEmpretimo};
  }


  export async function atualizar(id, campos) {

  if (idLivro!== undefined) campos.idLivro= idLivro.trim();
  if (idLeitor !== undefined) campos.idLeitor= idLeitor.trim();
  if (campos.dataEmprestimo !== undefined) campos.dataEmprestimo = dataEmprestimo.trim();

  const atualizado = await model.atualizar(id, campos);

  if (!atualizado) {
    throw new Error("não encontrao");
  }

  return await listarPorId(id);
}

export async function remover(id) {
  const removido = await model.remover(id);

  return removido

  if (!removido) {
    throw new ErroNaoEncontrado();
  }
}
