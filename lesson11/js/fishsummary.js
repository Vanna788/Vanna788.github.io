const fishhavenURL = "https://api.openweathermap.org/data/2.5/weather?id=5585000&appid=11eda4f6c23c30829f26d495b3e62fe3&units=imperial";

fetch(fishhavenURL)
  .then((response) => response.json())
  .then((fishhavenObject) => {
    console.log(fishhavenObject);

    document.getElementById("currentlyfish").textContent = fishhavenObject.weather[0].main;
    document.getElementById("htfish").textContent = fishhavenObject.main.temp;
    document.getElementById("humfish").textContent = fishhavenObject.main.humidity;
    document.getElementById("wsfish").textContent = fishhavenObject.wind.speed;

    const tempnumber = parseFloat(document.getElementById("htfish").textContent);
//console.log(tempnumber);

const speedNumber = parseFloat(document.getElementById("wsfish").textContent);
//console.log(speedNumber);

let windchill = 35.74 + (0.6215 * tempnumber) - (35.75 * Math.pow(speedNumber, 0.16)) + (0.4275 * tempnumber * Math.pow(speedNumber, 0.16));
windchill = Math.round(windchill);
//console.log(windchill);

if (tempnumber <= 50 && speedNumber > 3) {
    document.getElementById("wcfish").textContent = windchill;
}
  else {
      document.getElementById("wcfish").textContent = "N/A";
  }
   //console.log(document.getElementById("wc"));






});