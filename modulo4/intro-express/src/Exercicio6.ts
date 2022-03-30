type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

export const posts: Post[] = [
  {
    id: 1,
    title: "Novo Post",
    body: "Esse é um novo post",
    userId: 10,
  },
  {
    id: 2,
    title: 'Post Da Labenu',
    body: 'Usem o canal de duvidas',
    userId: 20
},
{
    id: 3,
    title: 'Os melhores Programadores',
    body: 'os melhores programadores estão saindo da turma VAUGHAN',
    userId: 30
},
{
    id: 4,
    title: 'Contrate',
    body: 'Empresas contrate devs Junior Please!',
    userId: 40
}
];
