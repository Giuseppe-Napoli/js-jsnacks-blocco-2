//software deve chiedere per 5 volte all’utente di inserire un numero.(dentro i cicli)
var list_num = [];

//creo una variabile somma
var somma = 0;

//CICLO FOR

/* for(i=0; i < 5; i++){
  var num = parseInt(prompt('inserisci un numero'));
  list_num.push(num);
  somma += list_num[i]
}

console.log(list_num);
console.log(somma);
 */

//CICLO WHILE

i = 0
while (i < 5){
  var num = parseInt(prompt('inserisci un numero'));
  list_num.push(num);
  somma += list_num[i]
  i++
}

console.log(list_num);
console.log(somma);
