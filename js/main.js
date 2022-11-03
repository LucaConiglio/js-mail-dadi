// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

const emails = ["lucaconiglio@gmail.com", "irenerossi@gmail.com", "francescoverdi@gmail.com", "giuliaarancio@gmail.com"];
console.log(emails);

let inserisciMail = prompt("inserisci una mail valida");

console.log(inserisciMail);
let elTrovato = "thx for tutorial"

for (let i = 0; i < emails.length; i++){
    if (inserisciMail === emails[i]){
        elTrovato = "EZ"
        
    }
    
}
if (elTrovato !== "thx for tutorial"){
    alert(" ho trovato la tua mail puoi entrare")
} else{
alert("non ho trovato la tua mail, perfavore ricarica la pagina e reinserisci la tua mail");
}
