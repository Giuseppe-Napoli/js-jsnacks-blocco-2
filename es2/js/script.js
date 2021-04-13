var ins_num = parseInt(prompt("Inserisci un numero"));
//Inserisci un numero, se è pari stampa il numero
if(ins_num % 2 === 0){
  console.log("Il numero è pari:" + ins_num)
//se è dispari stampa il numero successivo  
}else{
  console.log("Il numero è dispari di conseguenza questo valore verrà incrementato di 1 : " + (ins_num + 1));
}