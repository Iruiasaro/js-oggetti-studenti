//Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
var studentIdentity = {
    nome: "James",
    cognome: "LeBron",
    age: 36,
}
//Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
for (var key in studentIdentity) {
    console.log(studentIdentity[key]);
  }

 //Creare un array di oggetti di studenti.
var studenti = [
    {
        nome: "Micheal",
        cognome: "Jordan",
        age: 58,    
    },
    
    {
        nome: "Karl",
        cognome: "Malone",
        age: 57,    
    },

    {
        nome: "Shaquille",
        cognome: "O'Neal",
        age: 49,    
    },
];

//Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
for (var i = 0; i < studenti.length; i++) {
    var studentIdentity = studenti[i];
    console.log(studentIdentity.nome, studentIdentity.cognome);
  };

  

