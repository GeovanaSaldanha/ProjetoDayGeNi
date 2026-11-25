// src/services/exemplares.service.js
import * as model from '../model/exemplares.model.js';


export class ErroDeValidacao extends Error {
  constructor(mensagem) {
    super(mensagem);
    this.name = 'ErroDeValidacao';
  }
}


export async function listar() {
  const documentos = await model.buscarTodas();
  return documentos;
}

export async function criar({ id, LivroId, situação}) {
  if (!id) {
     throw new ErroDeValidacao('O id é obrigatório.');
   }
 
   if (!LivroId) {
     throw new ErroDeValidacao('O LivroId é obrigatório.');
   }
  if (!situação) {
     throw new ErroDeValidacao('O situação é obrigatório.');
   }
 
   const NovoExemplar = {
     id: id.trim(),
     LivroId: LivroId.trim(),
     situação: situação.trim(),
    
   };
   const insertedId = await model.inserir(NovoExemplar);
   return { _id: insertedId, ...NovoExemplar};
  }

  export async function atualizar(id, campos) {

  if (id!== undefined) campos.id= id.trim();
  if (LivroId !== undefined) campos.LivroId = LivroId.trim();
  if (campos.situação !== undefined) campos.situação = situação.trim();

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
