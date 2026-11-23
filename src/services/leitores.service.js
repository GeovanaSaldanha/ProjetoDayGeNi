// src/services/leitores.service.js
import * as leitorModel from '../models/leitores.model.js';
import * as emprestimoModel from '../model/emprestimo.model.js';

export class ErroDeValidacao extends Error {
  constructor(mensagem) {
    super(mensagem);
    this.name = 'ErroDeValidacao';
  }
}

// O MongoDB guarda o identificador em `_id` (ObjectId). A API expõe `id` como texto, e é isso que este formato devolve.
function paraFormatoDaApi(documento) {
  return {
    id: documento._id.toHexString(),
    titulo: documento.titulo,
    concluida: documento.concluida,
  };
}

export async function listar() {
  const documentos = await model.buscarTodas();
  return documentos.map(paraFormatoDaApi);
}

export async function criar({ nome, email, limiteEmprestimos }) {
  if (!nome) {
     throw new ErroDeValidacao('O nome é obrigatório.');
   }
 
   if (!email) {
     throw new ErroDeValidacao('O email é obrigatório.');
   }
 
   const NovoLeitor = {
     nome: nome.trim(),
     email: email.trim(),
     limiteEmprestimos: limiteEmprestimos.trim(),
    
   };
   const insertedId = await model.inserir(NovoLeitor);
   return { _id: insertedId, ...NovoLeitor};
}

export async function historico(id) {
  try {
    const historico = await emprestimoModel.historico(id);

    return historico;

  } catch (error) {
    return res.status(404).json({ erro: 'Leitor não encontrado ou historico inexistente.' })
  }
}

export async function atualizar(id, campos) {

  if (nome !== undefined) campos.nome = nome.trim();
  if (email !== undefined) campos.email = email.trim();
  if (campos.limiteEmprestimos !== undefined) campos.limiteEmprestimos = limiteEmprestimos.trim();

  const atualizado = await model.atualizar(id, campos);

  if (!atualizado) {
    throw new ErroNaoEncontrado();
  }

  return await listarPorId(id);
}

export async function remover(id) {
  const removido = await model.remover(id);

  if (!removido) {
    throw new ErroNaoEncontrado();
  }
}