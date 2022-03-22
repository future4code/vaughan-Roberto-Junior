
// Exercicio 2

const op = process.argv[2];
const n1 = Number(process.argv[3]);
const n2 = Number(process.argv[4]);

switch (op) {
  case "add":
    console.log(`Resposta: ${n1 + n2}`);
    break;
  case "sub":
    console.log(`Resposta: ${n1 - n2}`);
    break;
  case "mult":
    console.log(`Resposta: ${n1 * n2}`);
    break;
  case "div":
    console.log(`Resposta: ${n1 / n2}`);
    break;
}