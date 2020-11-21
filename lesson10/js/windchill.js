
const tempnumber = parseFloat(document.getElementById("ht").textContent);
console.log(tempnumber);

const speedNumber = parseFloat(document.getElementById("ws").textContent);
console.log(speedNumber);

let windchill = 35.74 + (0.6215 * tempnumber) - (35.75 * Math.pow(speedNumber, 0.16)) + (0.4275 * tempnumber * Math.pow(speedNumber, 0.16));
windchill = Math.round(windchill);
//console.log(windchill);

if (tempnumber <= 50 && speedNumber > 3) {
    document.getElementById("wc").textContent = windchill;
}
  else {
      document.getElementById("wc").textContent = "N/A";
  }
