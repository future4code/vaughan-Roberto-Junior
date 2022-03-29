
var data = new Date();
var dataAtual = data.getTime();

const renovarCarteira = (nascimento: string, identidade: string): boolean => {
     let dataNascimento =  new Date(nascimento);
     let dataIdentidade =  new Date(identidade);
     let idade = data.getFullYear() - dataNascimento.getFullYear();
     let tempoCarteira = data.getFullYear() - dataIdentidade.getFullYear();

     if(idade <= 20){
        return tempoCarteira >= 5 ? true : false;
     }else if(idade > 20 && idade <= 50){
         return tempoCarteira >= 10 ? true : false;
     }else{
         return tempoCarteira >= 15 ? true : false;
     }

}


console.log(renovarCarteira('09/05/1994', '01/07/2010'));

