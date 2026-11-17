// src/services/livros.service.js
import * as model from '../model/livros.model.js';

export class ErroDeValidacao extends Error {
  constructor(mensagem) {
    super(mensagem);
    this.name = 'ErroDeValidacao';
    this.status = 400;
  }
}

export class ErroNaoEncontrado extends Error {
  constructor(mensagem = 'Livro não encontrado.') {
    super(mensagem);
    this.name = 'ErroNaoEncontrado';
    this.status = 404;
  }
}

export async function listar() {
  return await model.buscarTodas();
}

export async function listarPorId(id) {
  const livro = await model.buscarPorId(id);

  if (!livro) {
    throw new ErroNaoEncontrado();
  }

  return livro;
}

export async function criar({ titulo, autor, genero, anoPublicacao }) {
  if (!titulo) {
    throw new ErroDeValidacao('O título é obrigatório.');
  }

  if (!autor) {
    throw new ErroDeValidacao('O autor é obrigatório.');
  }

  const livroNovo = {
    titulo: titulo.trim(),
    autor: autor.trim(),
    genero: genero?.trim(),
    anoPublicacao,
  };
  const insertedId = await model.inserir(livroNovo);
  return { _id: insertedId, ...livroNovo };
}

export async function atualizar(id, { titulo, autor, genero, anoPublicacao }) {
  const campos = {};

  if (titulo !== undefined) campos.titulo = titulo.trim();
  if (autor !== undefined) campos.autor = autor.trim();
  if (genero !== undefined) campos.genero = genero.trim();
  if (anoPublicacao !== undefined) campos.anoPublicacao = anoPublicacao;

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