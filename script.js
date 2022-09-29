//Hämtar elementen med de specifika iden och sparar dem i variabler.
//för att sedan återanvändas i funktionerna nedan.
const inpKey = document.getElementById("inpKey");
const inpValue = document.getElementById("inpValue");
const btnInsert = document.getElementById("btnInsert");

//Använder variabel med metod som skickar in data i min funktion.
// Där deklareras 2 nya variabler.
btnInsert.onclick = function () {
  const key = inpKey.value;
  const value = inpValue.value;

  //If sats för att kontrollera om inloggningsuppgifterna stämmer.
  //Gör de det sparas användarens uppgifter i localStorage och man loggas in.
  // Meddelande för att välkomna användaren.
  //Knappen byter text till "Logga ut"
  // Om inte - användaren får ett meddelande om att försöka igen.
  if (key == "Sara" && value == "qwe123") {
    localStorage.setItem(key, value);
    alert("Välkommen, du är nu inloggad");
    document.getElementById("btnInsert").innerHTML = "Logga ut";
    // Funktion för att styra utloggningsfuntionen. Samma princip som ovan
    // It-sats som är nestad i en if-sats.
    //location.reload för att ladda om sidan.
    btnInsert.onclick = function () {
      if (key == "Sara" && value == "qwe123") {
        location.reload(alert("Du är nu utloggad"));
      }
    };
  } else {
    location.reload(alert("Fel användarnamn eller lösenord, försök igen"));
  }
};
