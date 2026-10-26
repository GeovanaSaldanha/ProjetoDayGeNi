let livros = [
  {
    id: 1,
    titulo: 'Dom Casmurro',
    autor: 'Machado de Assis',
    genero: 'Romance',
    anoPublicacao: 1899
  },
  {
    id: 2,
    titulo: 'O Hobbit',
    autor: 'J.R.R. Tolkien',
    genero: 'Fantasia',
    anoPublicacao: 1937
  },
  {
    id: 3,
    titulo: 'O Namorado',
    autor: 'Freida McFadden',
    genero: 'Suspense',
    anoPublicacao: 2024
  },
  {
    id: 4,
    titulo: 'A Culpa é das Estrelas',
    autor: 'John Green',
    genero: 'Romance',
    anoPublicacao: 2012
  }
];

let proximoId = 1;

export function listar(){
    return livros;
}