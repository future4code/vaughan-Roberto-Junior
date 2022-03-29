

const qtdAnagramas = (str: string): number => {
    let fatorial: number = str.length;
    let arr: number[] = [];

    for(let i: number = 0; i < fatorial; i++){
        arr.push(i+1)
    }

    arr.reverse();

    return arr.reduce((a,p) => a * p, 1);
}

console.log(qtdAnagramas('Vaughan'));
