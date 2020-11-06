let mainArray = [];
let arrayInput = document.getElementById("inputArray"); // Input of array elements
let inputK = document.getElementById("inputK"); // Input of "k" value
let arrayAttribute = document.getElementById("arrayAttribute"); // Label of array
let kAttribute = document.getElementById("kAttribute"); // Label of "k" value
let upToKAtrribute = document.getElementById("upToK"); // Label of "upToK" function
let denominator = document.getElementById("denom"); // Label of "gratesDenom" function
let distinctElementsCount = document.getElementById("dist"); //Label of "distinctElements" function

function pushToArray() {
  if (arrayInput.value == "") {
    alert("Please enter input value ");
  } else {
    mainArray.push(arrayInput.value);
    arrayAttribute.innerHTML = mainArray;
    arrayInput.value = "";
  }
}

function pushkAttribute() {
  if (inputK.value == "") {
    alert("Please enter input value ");
  } else {
    kAttribute.innerHTML = inputK.value;
    inputK.value == "";
  }
}

function randomArray() {
  arrayAttribute.innerHTML = " ";
  mainArray = [1, 2, 3, 4];
  arrayAttribute.innerHTML = mainArray;
}

function clearArray() {
  mainArray = [];
  arrayAttribute.innerHTML = "";
}

function upToK() {
  let z = 0;
  let kVal = kAttribute.innerHTML;
  for (let i = 0; i < mainArray.length - 1; i++) {
    for (let j = 0; j < mainArray.length; j++) {
      if (mainArray[i] == mainArray[j]) j++;
      if (mainArray[i] + mainArray[j] == kVal) z++;
    }
  }

  if (z > 0) upToKAtrribute.innerHTML = "True";
  else upToKAtrribute.innerHTML = "False";
}

function gratestDenom() {
  let min = mainArray[0];
  let reminderCount = 0;
  let denom;
  for (let i = 0; i < mainArray.length; i++) {
    if (mainArray[i] < min) min = mainArray[i];
  }

  for (i = 0; i < mainArray.length; i++) {
    if (mainArray[i] % min == 0) reminderCount++;
  }

  if (reminderCount == mainArray.length) denom = min;
  else {
    for (j = min; j > 0; j--) {
      for (i = 0; i < mainArray.length; i++) {
        if (mainArray[i] % j == 0) denom = j;
      }
    }
  }

  denominator.innerHTML = denom;
}

function distinctElements() {
  let distCount = 1;

  for (let i = 0; i < mainArray.length - 1; i++) {
    if (mainArray[i] != mainArray[i + 1]) {
      distCount++;
    } else distCount = 1;
  }

  console.log(distCount);
  distinctElementsCount.innerHTML = distCount;
}

function distinctElementsV2() {
  let newArr = [];
  let distCount = 0;

  for (let i = 0; i < mainArray.length - 1; i++) {
    if (mainArray[i] != mainArray[i + 1] && !newArr.includes(mainArray[i])) {
      newArr.push(mainArray[i]);
    }
  }
  distCount = newArr.length;
  console.log(distCount);
  distinctElementsCount.innerHTML = distCount;
}

function startOperations() {
  upToK();
  gratestDenom();
  distinctElementsV2();
}
