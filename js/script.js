// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21

// Chiedere all utente il suo nome
const Name = prompt ('Inserisci il nome');
console.log(Name);
// Chiedere all utente il suo cognome
const LastName = prompt ('Inserisci il cognome');
console.log(LastName);
// Chiedere all utente il suo colore preferito
const Color = prompt ('Inserisci il tuo colore preferito');
console.log(Color);
// Trasmettere sulla pagina la password intera
const Message = `La tua password è : ${Name}${LastName}${Color}21`;
console.log(Message);

document.getElementById('pwd_gen').innerHTML = Message;
