const posts: Post = [
  {
    autor: "Alvo Dumbledore",
    texto: "Não vale a pena viver sonhando e se esquecer de viver",
  },
  {
    autor: "Severo Snape",
    texto: "Menos 10 pontos para Grifinória!",
  },
  {
    autor: "Hermione Granger",
    texto: "É levi-ô-sa, não levio-sá!",
  },
  {
    autor: "Dobby",
    texto: "Dobby é um elfo livre!",
  },
  {
    autor: "Lord Voldemort",
    texto: "Avada Kedavra!",
  },
];

type Post = [
  {
    autor: string;
    texto: string;
  },
  {
    autor: string;
    texto: string;
  },
  {
    autor: string;
    texto: string;
  },
  {
    autor: string;
    texto: string;
  },
  {
    autor: string;
    texto: string;
  }
];

let autorInformado: string = process.argv[2];

function buscarPostsPorAutor(posts: Post, autorInformado: string): {}{
  return posts.filter((post) => {
    return post.autor === autorInformado;
  });
}

console.log(buscarPostsPorAutor(posts, autorInformado));
