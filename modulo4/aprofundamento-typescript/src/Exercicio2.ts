

function obterEstatisticas(numeros: number[]): {maior: number, menor: number, media: number}{

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

type AmostraDeDados = {

    numeros: number[],

    obterEstatisticas: (numeros: []) => {}
}

let Resultado: AmostraDeDados = {
   numeros: [21, 18, 65, 44, 15, 18],
   obterEstatisticas: function (numeros: number[]): {}{
       return obterEstatisticas(numeros)
   }
}

console.log(Resultado);

