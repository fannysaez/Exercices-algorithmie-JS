// ## Exercice 3 ##
// Faire une fonction qui prend en paramètre une température d’un volume d’eau, 
// on veut savoir dans quel état est l’eau (solide, liquide ou gaz) 
// (positif : liquide, négatif : solide, au dela de 100°: gaz)
function etatEau(temperature){
    if(temperature < 0){
        return "solid"; //Si la température est en dessous de 0°C : l'eau est solide
    }
    else if (temperature >= 0 && temperature <= 100){
        return "liquide"; //Si température entre 0°C et 100°C inclus : l'eau est liquide
    }
    else{
        return "gaz";//Si température au-delà de 100°C : l'eau est sous la forme de vapeur
    }
}
//Affichera dans la console.log :
console.log(etatEau(-15)); //Affichera Solid;
console.log(etatEau(50)); //Affichera liquide;
console.log(etatEau(150)); //Affichera gaz;