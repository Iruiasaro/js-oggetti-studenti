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


//Dare la possibilità all’utente, attraverso 3 prompt(), 
var newName = prompt("Inserisci il tuo nome"); 
var newSurname = prompt("Inserisci il tuo cognome");
var newAge = prompt("Inserisci la tua età");

//di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
var newStudent = {
    nome: newName,
    cognome: newSurname,
    age: newAge,
};

for (var key in newStudent) {
    console.log(newStudent[key]);
}


//soluzione alternativa per terzo punto

/*var mappaRichieste = [
    {
        domanda: "Inserisci il nome dello studente",
        chiave: "nome"
    },

    {
        domanda: "Inserisci il cognome dello studente",
        chiave: "cognome"
    },

    {
        domanda: "Inserisci il nome dello studente",
        chiave: "età"
    }

]

var nuovoStudente = {}

for (var i = 0; i < mappaRichieste.length; i++) {

    var oggMappa = mappaRichieste[i];

    var risultatoPrompt = prompt(oggMappa.domanda);

    var risultatoValidazione = true;

    if(oggMappa.validation === "numero") {
        i--
        alert ("L'età inserita non è valida")

        risultatoValidazione = true;
    }
    if (risultatoValidazione) {
        nuovoStudente[oggMappa.chiave] =risultatoPrompt;
    }
}

studenti.push(nuovoStudente);

console.log(studenti);/*
