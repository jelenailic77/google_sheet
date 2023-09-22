function ExecuteScript(strId)
{
  switch (strId)
  {
      case "69RkhUkTfoz":
        Script1();
        break;
      case "5jaWb2dpk9P":
        Script2();
        break;
      case "6OwrMtRVy2j":
        Script3();
        break;
  }
}

function Script1()
{
  const url = "https://script.google.com/macros/s/AKfycbw_fCJVID4SKg-qAbvfGx-tKN0jrasuPubDopB34nW4bjgeHoMSHg3N9EU7frRMObMx/exec";

const player = GetPlayer();

let feedBack = player.GetVar("button_1"); 
fetch(url,{
  method: 'POST',
  mode: 'no-cors', 
  cache: 'no-cache', 
  headers: {'Content-Type': 'application/json'},
  redirect: 'follow',
  body: JSON.stringify({text:feedBack}) 
});
}

function Script2()
{
  const url = "https://script.google.com/macros/s/AKfycbw_fCJVID4SKg-qAbvfGx-tKN0jrasuPubDopB34nW4bjgeHoMSHg3N9EU7frRMObMx/exec";

const player = GetPlayer();
let feedBack1 = player.GetVar("button_2"); 

fetch(url,{
  method: 'POST',
  mode: 'no-cors', 
  cache: 'no-cache', 
  headers: {'Content-Type': 'application/json'},
  redirect: 'follow',
  body: JSON.stringify({text: feedBack1}) 
});
}

function Script3()
{
  const url = "https://script.google.com/macros/s/AKfycbw_fCJVID4SKg-qAbvfGx-tKN0jrasuPubDopB34nW4bjgeHoMSHg3N9EU7frRMObMx/exec";

const player = GetPlayer();
let feedBack2 = player.GetVar("button_3"); 

fetch(url,{
  method: 'POST',
  mode: 'no-cors', 
  cache: 'no-cache', 
  headers: {'Content-Type': 'application/json'},
  redirect: 'follow',
  body: JSON.stringify({text: feedBack2}) 
});
}

