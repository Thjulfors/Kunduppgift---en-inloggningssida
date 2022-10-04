
const inpKey = document.getElementById("inpKey");
const inpValue = document.getElementById("inpValue");
const btnInsert = document.getElementById("btnInsert");


btnInsert.onclick = function () {
  const key = inpKey.value;
  const value = inpValue.value;

  
  if (key == "Sara" && value == "qwe123") {
    localStorage.setItem(key, value);
    alert("Välkommen, du är nu inloggad");
    document.getElementById("btnInsert").innerHTML = "Logga ut";
    
    btnInsert.onclick = function () {
      if (key == "Sara" && value == "qwe123") {
        location.reload(alert("Du är nu utloggad"));
      }
    };
  } else {
    location.reload(alert("Fel användarnamn eller lösenord, försök igen"));
  }
};
