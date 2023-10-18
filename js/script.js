// Raccolta dei dati
const username = prompt("Dimmi il tuo nome");
const userLastname = prompt(`Ciao ${username}, qual'è il tuo cognome?`);
const userColor = prompt("Qual'è il tuo colore preferito tra blue e green?"); //green
const rndNumber = 21;

// Logica del programma
const password = username + userLastname + userColor + rndNumber;
// console.log(password);

const message =  `
    <h2>Ciao ${username}!</h2>
    <p>Ecco la tua password supersicura: 
        <span class="${userColor}">${password}</span>
    </p>
    <p>Usala dappertutto, ${username}</p>
`;

// const message = "<h2>Ciao " + username + "!</h2>" 
//                 + "<p>Ecco la tua password supersicura: <span class='${userColor}'>" + password + "</span></p>";


console.log(message);

// Output
const resultElem = document.getElementById("result");
console.log(resultElem.innerHTML);
resultElem.innerHTML = resultElem.innerHTML + message;
// document.getElementById("result").innerHTML = message;

