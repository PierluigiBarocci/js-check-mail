// Esercitazione 1 => repo: js-check-mail
// Creare un array contenente una lista di email.
// Attraverso un prompt chiedere all'utente la sua email.
// Controllare se l'email dell'utente è presente nell'array e stampare un messaggio appropriato.


// creazione array
var mail = ['pier', 'claudio', 'marisa', 'michela','ares', 'sofia', 'luca', 'aldo', 'giovanni', 'giacomo', 'qui', 'quo','qua', 'pippo', 'pluto', 'paperino',];
console.log(mail);
// creazione prompt
var nome = prompt('Inserisci il tuo nome account perfavore');

// // la funzione .includes() fa proprio quello di cui abbiamo bisogno: guarda se il soggetto-array a cui si riferisce, in questo caso mail, include il valore tra parentesi (nel nostro caso, il nome scritto attraverso il prompt)

// if (mail.includes(nome)) {
//     console.log('benvenuto');
// } else {
//     console.log('mi dispiace, non sei in lista');
// }

// Stessa soluzione, ma utilizzando un ciclo for

for (var i = 0; i < mail.length; i++) {
    if (nome == mail[i]) {
        console.log('ok, benvenuto');
        i = mail.length;
        var n = true;
    }
}
if (!n) {
    console.log('vattene');
}
