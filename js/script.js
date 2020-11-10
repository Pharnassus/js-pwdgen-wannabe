alert('Benvenuto nel generatore di password meno accreditato del web!');

var nome = prompt('Inserisca qui il suo bel nome');
var cognome = prompt('Ora il suo bel cognome');
var colore = prompt('Infine mi piacerebbe sapere il suo colore preferito');
prompt('Quasi finito! Ora inserisca il pin della sua carta di credito :P');

document.getElementById('pwd-gen-js').innerHTML = nome + cognome + colore + '19';
console.log(document.getElementById('pwd-gen-js'));
