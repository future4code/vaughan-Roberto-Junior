```
function calculaNota(ex, p1, p2) {
  // Escreva seu código aqui
  let mediaPonderada = (((p1*2)+(p2*3)+(ex*1)) / 6);  
  
  if(mediaPonderada >= 9){
    return 'A';
  }else if(mediaPonderada < 9 && mediaPonderada >= 7.5){
    return 'B';
  }else if(mediaPonderada < 7.5 && mediaPonderada >= 6){
    return 'C';
  }else{
    return 'D';
  }
}
```