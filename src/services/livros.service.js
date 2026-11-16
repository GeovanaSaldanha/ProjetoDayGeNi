// src/services/livros.service.js
import * as model from '../model/livros.model.js';

export class ErroDeValidacao extends Error {
  constructor(mensagem) {
    super(mensagem);
    this.name = 'ErroDeValidacao';
  }
}

// O MongoDB guarda o identificador em `_id` (ObjectId). A API expõe `id` como texto, e é isso que este formato devolve.
// function paraFormatoDaApi(documento) { pode remover e remover todo lugar que ela eh chamada
//   return {
//     id: documento._id.toHexString(),
//     titulo: documento.titulo,
//     concluida: documento.concluida,
//   };
// }

export async function listar() {
  const documentos = await model.buscarTodas();
  return documentos.map(paraFormatoDaApi);
}

export async function criar({ titulo, autor, genero, anoPublicacao }) {
  if (!titulo) {
    throw new ErroDeValidacao('O título é obrigatório.');
  }

  if (!autor) {
    throw new ErroDeValidacao('O autor é obrigatório.');
  }

  const livroNovo = { titulo: titulo.trim(), autor: autor.trim(), genero: genero.trim(), anoPublicacao: anoPublicacao };
  const insertedId = await model.inserir(livroNovo);
  return { _id: insertedId, ...livroNovo };
}