

const validaCPF = (cpf: string): any => {

    const regexCPF = /^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}$/;
    const newCpf: any = cpf.split("")
    let out = /\d/g;

    let nn = cpf.match(out).join('')

    for(let i = 1; i < nn.length; i++){
        if(nn[i] === nn[i+1]){
            console.log(true);
        }else{
            console.log(false)  
        }
    }

    if(regexCPF.test(cpf)){
       
    }

    return false
    
}


console.log(validaCPF('111.111.111-11'));
