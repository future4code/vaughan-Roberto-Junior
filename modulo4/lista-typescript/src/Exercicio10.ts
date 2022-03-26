

const validaCPF = (cpf: string): boolean => {

     //regex para validar cpf
    let regexCPF = /^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}$/;
    let testaCpfComRegex = regexCPF.test(cpf);
    let pontos: boolean;
    
    //consdição que verifica se existem 2 pontos e um -
    if(cpf[3] === '.' && cpf[7] === '.' && cpf[11] === '-'){
        pontos = true;
    }
    
    //transforma o cpf em um array
    const newCpf: any = cpf.split("")

    let out = /\d/g;
    
    //transforma o cpf em uma string tudo junto sem pontos ou traços
    let nn = cpf.match(out).join('');

    //transforma novamente em array só que dessa vez sem pontos ou traços
    let nn2 = nn.split("");

    //verifica se todos os caracters são iguais
    const verificaNumerosIguais = nn2.every((item: string, index: number, arr: string[]): boolean => {
        return item === arr[0];
    })
    
    if(pontos && testaCpfComRegex && !verificaNumerosIguais){
       return true;
    }


    return false;
    
}


console.log(validaCPF('222.222.222-21'));
