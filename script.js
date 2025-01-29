//## Exercice 0.1 ##

// 1- à partir de deux variables (int) qui peuvent changer n'importe quand, créer une condition qui permet d'afficher dans
// la console le plus petit des deux nombres.
// 2- si les nombres sont identique, afficher : "C'est les mêmes !!"
console.log("__________________________________________________________________________________________")
console.log("Exercice 0.1");
console.log("__________________________________________________________________________________________")
console.log("J'ai déclaré deux variables 'int' qui peuvent changer n'importe quand,")
console.log("Exemple :")
console.log("let nombre_1 = 8;")
console.log("let nombre_2 = 25;")
console.log("")
console.log("Affiche le plus petit des deux nombres 'condition'")
// 1- Les deux variables (int) qui peuvent changer n'importe quand,
let nombre_1 = 8;
let nombre_2 = 25;

//Condition qui permet d'afficher dans la console, le plus petit des deux nombres.
if (nombre_1 < nombre_2){
    console.log("nombre_1")
}
//Si le nombre_1 est inférieur au nombre_2

// 2- Comparaison === entre le nombre_1 et le nombre_2
else if (nombre_1 === nombre_2){
    console.log("C'est les mêmes !!"); //si les nombres sont identiques, affiche "C'est les mêmes !!"
}
//Sinon
else {
    console.log ("nombre_2"); //affiche le nombre_2
}