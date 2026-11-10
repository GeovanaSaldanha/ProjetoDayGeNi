// src/services/leitores.service.js
import * as leitorModel from '../models/leitores.model.js';
import * as emprestimoModel from '../models/emprestimo.model.js';

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

export async function criar({ titulo }) {
  if (typeof titulo !== 'string' || titulo.trim().length < 3) {
    throw new ErroDeValidacao('O título deve ter ao menos 3 caracteres.');
  }
  const novaTarefa = { titulo: titulo.trim(), concluida: false };
  const insertedId = await model.inserir(novaTarefa);
  return paraFormatoDaApi({ _id: insertedId, ...novaTarefa });
}

export async function historico(id) {
  try {
    const historico = await emprestimoModel.historico(id);

    return historico;

  } catch (error) {
    return res.status(404).json({ erro: 'Leitor não encontrado ou historico inexistente.' })
  }
}