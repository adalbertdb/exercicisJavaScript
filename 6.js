let hora = 15;

if (hora >= 0 && hora < 12) {
  console.log("Bon dia");
} else if (hora >= 12 && hora < 20) {
  console.log("Bona vesprada");
} else if (hora >= 20 && hora < 24) {
  console.log("Bona nit");
} else {
  console.log("Hora no vàlida");
}
