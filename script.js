var Studente = {
    nome: "nome",
    cognome: "cognome",
    eta: "età"
}

for (var key in Studente) {
    console.log(Studente[key]);
}

var classe = [
    {
        nome: "Allison",
        cognome: "Becker",
        eta: "29"
    },
    {
        nome: "Virgil",
        cognome: "Van Dijk",
        eta: "30"
    },
    {
        nome: "Joe",
        cognome: "Gomez",
        eta: "24"
    },
    {
        nome: "Trent",
        cognome: "Arnold",
        eta: "21"
    },
    {
        nome: "Mohamed",
        cognome: "Salah",
        eta: "28"
    },
    {
        nome: "Roberto",
        cognome: "Firmino",
        eta: "29"
    },
    {
        nome: "Sadio",
        cognome: "Manè",
        eta: "28"
    },
    {
        nome: "Andy",
        cognome: "Robertson",
        eta: "26"
    },
    {
        nome: "Jordan",
        cognome: "Henderson",
        eta: "29"
    }
]

for (var i = 0; i<classe.length; i++) {
    var student = classe[i];
    console.log(student);
}

var newStudent = {
    nome: prompt('inserisci il nome'),
    cognome: prompt('inserisci il cognome'),
    eta: prompt('inserisci età')
}

classe.push(newStudent);
console.log(classe);