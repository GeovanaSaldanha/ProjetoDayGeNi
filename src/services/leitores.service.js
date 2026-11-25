// src/services/leitores.service.js
import * as leitorModel from '../model/leitores.model.js';
import * as emprestimoModel from '../model/emprestimo.model.js';

export class ErroDeValidacao extends Error {
  constructor(mensagem) {
    super(mensagem);
    this.name = 'ErroDeValidacao';
  }
}


export async function listar() {
  const documentos = await leitorModel.buscarTodas();
  return documentos
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
   const insertedId = await leitorModel.inserir(NovoLeitor);
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
    throw new Error("Não encontrado");
  }

  return await listarPorId(id);
}


export async function remover(id) {
  const removido = await leitorModel.remover(id);

  if (!removido) {
    throw new Error("Não encontrado");
  }
}


