enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}


function sistemaDeCatalogos(nomeFilme: string, anoLancamento: number, genero: string, pontuação?: number): Filme{

    return {nome: nomeFilme, ano: anoLancamento, genero: genero, pontuação}

}


type Filme = {
    nome: string,
    ano: number,
    genero: string,
    pontuação?: number
}


console.table(sistemaDeCatalogos('Harry Potter', 2000, 'Aventura/Magia', 100000));
