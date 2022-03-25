

type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

// colocando no package.json "start": "tsc && node ./build/Exercicio4.js"

//teria que alterar o diretorio root no arquivo tsconfig.json

// só colocar o && e colocar o caminho do arquivo

