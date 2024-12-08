let numero1 = 10;
let numero2 = "20";
let text = "El resultat és: ";

console.log(numero1);
console.log(numero2);
console.log(text);

numero2 = Number(numero2);
console.log(numero2);
console.log(typeof numero2);

let resultat = numero1 + numero2;
console.log(text + resultat);
console.log(typeof resultat);

let resultatString = String(resultat);
console.log(resultatString);
console.log(typeof resultatString);