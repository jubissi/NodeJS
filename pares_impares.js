// Separar de 1 a 100 os números pares e ímpares
// Dica: Use FOR e IF
// Rodar com NodeJS

for(i=1;i<101;i++){
  resto = i%2;
  if(resto == 0){
    console.log(i + ' = PAR');
  }else{
    console.log(i + ' = IMPAR');
  }
}
