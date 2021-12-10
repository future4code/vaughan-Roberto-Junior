//EXERCICIO DE INTERPRETAÇÃO

/*
1.
SERÁ IMPRESSO NO CONSOLE OS OBJETOS SEUS INDICES E O ARRAY COMPLETO

2.
IRÁ RETORNAR OS NOMES DOS OBJETOS DENTRO DO ARRAY

3.
VAI SER IMPRESSO OS OBJETOS QUE NÃO TIVEREM O APELIDO CHIJO

*/

//EXERCICIO DE ESCRITA

//1A
const pets = [
  { nome: "Lupin", raca: "Salsicha" },
  { nome: "Polly", raca: "Lhasa Apso" },
  { nome: "Madame", raca: "Poodle" },
  { nome: "Quentinho", raca: "Salsicha" },
  { nome: "Fluffy", raca: "Poodle" },
  { nome: "Caramelo", raca: "Vira-lata" },
];

let newArr = pets.map((item) => {
  return item.nome;
});

console.log(newArr);

//1B
let arrSalsicha = pets.filter((item) => {
  return item.raca == "Salsicha";
});

console.log(arrSalsicha);

//1C

let arrPoodle = pets.filter((item) => {
  return item.raca == "Poodle";
});

nomee = arrPoodle.map((item) => {
  return item.nome;
});

console.log(`Você ganhou um cupom de desconto de 10%
 para tosar o/a ${nomee[0]}`);
console.log(`Você ganhou um cupom de desconto de 10%
 para tosar o/a ${nomee[1]}`);

//2

const produtos = [
  { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
  { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
  { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
  { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
  { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
  { nome: "Cândida", categoria: "Limpeza", preco: 3.3 },
  { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
  { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
  { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
  { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.8 },
];

//2a
let arrNomeItens = produtos.map((item) => {
  return item.nome;
});

console.log(arrNomeItens);

//2b
let arrNovoPreco = produtos.map((item) => {
  return item.preco - (item.preco*(5/100));    
})

let arrNome = produtos.map((i) =>{
    return i.nome;
})

newArr = [];

newArr.push(arrNome);
newArr.push(arrNovoPreco);

console.log(newArr);

//2c

let arrBebidas = produtos.filter((item) =>{
    return item.categoria === "Bebidas"
})

console.log(arrBebidas);

//2d

let arrYpeFrase = produtos.filter((item) =>{
    return item.nome.includes('Ypê');
})

console.log(arrYpe);

//2e

let arrYpeFrase = produtos.filter((item) =>{
    return item.nome.includes('Ypê')
}).map((i) =>{
    return `Compre: ${i.nome} por: ${i.preco}`;
})

console.log(arrYpeFrase);

//DESAFIOOOOOOOOO !!!!!!!!

const pokemons = [
  { nome: "Bulbasaur", tipo: "grama" },
  { nome: "Bellsprout", tipo: "grama" },
  { nome: "Charmander", tipo: "fogo" },
  { nome: "Vulpix", tipo: "fogo" },
  { nome: "Squirtle", tipo: "água" },
  { nome: "Psyduck", tipo: "água" },
]

let pokeOrdem = pokemons.map((item)=>{
   return item.nome
})

console.log(pokeOrdem.sort());

//B

let pokeTipo = pokemons.map((item)=>{
  return item.tipo
});

let newP = pokeTipo.filter((este, i) => pokeTipo.indexOf(este) === i);

console.log(newP);