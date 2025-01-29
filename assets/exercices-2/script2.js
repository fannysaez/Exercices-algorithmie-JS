// ## Exercice 2 ##
// Faire une fonction qui prend en paramètre un prix HT unitaire d’un produit, et son nombre de produit.
// On veut connaitre le total TTC.
console.log("")
function calculerTotalTTC(prixHT, quantite, tauxTVA = 20) {
    if (prixHT < 0 || quantite < 0) {
        return "Les valeurs doivent être positives.";
    }
    
    let totalHT = prixHT * quantite;
    let totalTTC = totalHT * (1 + tauxTVA / 100);
    
    return totalTTC.toFixed(2); // Retourne le total avec 2 décimales
}

// Exemple d'utilisation
console.log(calculerTotalTTC(100, 2)); // 240.00 si TVA = 20%
console.log(calculerTotalTTC(50, 5, 10)); // 275.00 si TVA = 10%