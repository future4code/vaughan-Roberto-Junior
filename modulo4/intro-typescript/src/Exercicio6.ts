
function operacoes(n1: number, n2: number): string{

    let maior: number | string;

    if(n1 < n2){
        maior = n2;
    }else if(n1 === n2){
        maior = 'São Iguais';
    }else{
        maior = n1;
    }

    return `A Soma dos numeros é ${n1+n2}, a Subtração: ${n1-n2}, multiplicação: ${n1*n2} e o maior deles é ${maior}`

}

console.log(operacoes(9,9));
