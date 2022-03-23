

function dnaToRna(str: string): string{
    let first: string =  str.replace(/A/g, 'U').replace(/G/g, 'c').replace(/T/g, 'A').replace(/C/g, 'G');

    return first;
}

console.log(dnaToRna('ATTGCTGCGCATTAACGACGCGTA').toUpperCase());
