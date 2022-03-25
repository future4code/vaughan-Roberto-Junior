let minhaString: string = "Vaughan";
//Não é possível atribuir numeros pois a variavel é do tipo string

let meuNumero: string | number = "Vaughan";

type Pessoa = {
  nome: string;
  idade: number;
  corFavorita: Cor;
};

enum Cor {
    COR1 = "Azul",
    COR2 = "Vermelho",
    COR3 = "Laranja",
    COR4 = "Amarelo",
    COR5 = "Verde",
    COR6 = "Azul-Escuro",
    COR7 = "Violeta",
}

let Person1: Pessoa = {
  nome: "Roberto",
  idade: 27,
  corFavorita: Cor.COR1,
};

let Person2: Pessoa = {
    nome: "Magali",
    idade: 33,
    corFavorita: Cor.COR2,
  };

  let Person3: Pessoa = {
    nome: "Cebolinha",
    idade: 15,
    corFavorita: Cor.COR3,
  };

console.table(Person1);
console.table(Person2);
console.table(Person3);
