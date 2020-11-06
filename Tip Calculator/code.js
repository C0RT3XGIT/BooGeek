let billAmount = document.getElementById("bill");
let guestsCount = document.getElementById("guests");
let billLabel = document.getElementById("billLabel");
let guestsLabel = document.getElementById("guestsLabel");
let toPay = document.getElementById("toPay");
let trueID; // ID of checked element

function checkFunc() {
  let x = document.getElementsByName("selector");
  let procent;
  let tip;
  for (let i = 0; i < x.length; i++) {
    if (x[i].checked) trueID = x[i].id;
  }

  switch (trueID) {
    case "out":
      procent = 30;
      break;
    case "good":
      procent = 20;
      break;
    case "ok":
      procent = 15;
      break;
    case "bad":
      procent = 10;
      break;
    case "never":
      procent = 0;
      break;
    default:
      procent = 0;
      break;
  }
  //console.log(typeof trueID == "undefined");
  tip =
    ((parseInt(billAmount.value) / 100) * procent) /
    parseInt(guestsCount.value);
  return tip;
}

function startFunc() {
  if (billAmount.value == "" || guestsCount == "") alert("Data missing");
  else {
    billLabel.innerHTML = billAmount.value;
    guestsLabel.innerHTML = guestsCount.value;
    toPay.innerHTML = checkFunc() + "$";
  }
}
