// Generare un numero random da 1 a 6, sia per il 
// giocatore sia per il computer.
// // Stabilire il vincitore, in base a chi fa 
// il punteggio più alto.

let numero = (Math.floor(Math.random()*6) +1);
console.log(numero);
let numero2 = (Math.floor(Math.random()*6) +1);

let player1 = numero;
let computer = numero2;

console.log("player", player1);
console.log("computer", computer);


if ( player1 > computer ) {
    alert ("ha vinto il Player");
} else if ( computer > player1 ) {
    alert ("ha vinto il Computer");
}else {
    alert ("la partita termina in pareggio!!");
}
