const romanos: Obj[] = [
  { letra: "M", valor: 1000 },
  { letra: "CM", valor: 900 },
  { letra: "D", valor: 500 },
  { letra: "CD", valor: 400 },
  { letra: "C", valor: 100 },
  { letra: "XC", valor: 90 },
  { letra: "L", valor: 50 },
  { letra: "XL", valor: 40 },
  { letra: "X", valor: 10 },
  { letra: "IX", valor: 9 },
  { letra: "V", valor: 5 },
  { letra: "IV", valor: 4 },
  { letra: "I", valor: 1 },
];

type Obj = {
    letra: string,
    valor: number
}

const converterParaRomanos = (numero: number): string => {
  if (numero > 3000) {
    return "insira um numero menor que 3000";
  }

  let letras: string[] = [];
  let numeroo: number = numero;
  let a: number = 0;

  while (a < 10){
    for (let i = 0; i < romanos.length; i++){
      if (numeroo >= romanos[i].valor) {
        letras.push(romanos[i].letra);
        numeroo -= romanos[i].valor;
        break;
      }
    }

    a++;
  }

  return letras.join("");
};

console.log(converterParaRomanos(2222));
