//Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
var studentIdentity = {
    nome: "James",
    cognome: "LeBron",
    età: "36",
}
//Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
for (var key in studentIdentity) {
    console.log(studentIdentity[key]);
  }

  