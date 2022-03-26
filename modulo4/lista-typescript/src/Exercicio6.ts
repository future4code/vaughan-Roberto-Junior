
const clientes: {}[]= [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

type Clientes = {
  cliente: string,
  saldoTotal: number,
  debitos: number[]
}

const saldoTotal = (arr: {}[]): {} => {
   return arr.map((item: Clientes) => {
       item.saldoTotal = (item.saldoTotal) - (item.debitos.reduce((a: any, p: any) => a + p, 0));
       item.debitos = [];
       return item;
   }).filter((item: Clientes) => {
       return item.saldoTotal < 0;
   })
}

console.table(saldoTotal(clientes));