// Esercitazione 1 => repo: js-check-mail
// Creare un array contenente una lista di email.
// Attraverso un prompt chiedere all'utente la sua email.
// Controllare se l'email dell'utente è presente nell'array e stampare un messaggio appropriato.


// creazione array
var mail = ['pier', 'claudio', 'marisa', 'michela','ares', 'sofia', 'luca', 'aldo', 'giovanni', 'giacomo', 'qui', 'quo','qua', 'pippo', 'pluto', 'paperino',];
console.log(mail);
// creazione prompt
var nome = prompt('Inserisci il tuo nome account perfavore');
console.log(nome);

//scorriamo attraverso l'Array

if (mail.includes(nome)) {
    console.log('benvenuto');
} else {
    console.log('mi dispiace, non sei in lista');
}
