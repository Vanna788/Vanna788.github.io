const sodaspringsURL = "https://api.openweathermap.org/data/2.5/weather?id=5607916&appid=11eda4f6c23c30829f26d495b3e62fe3&units=imperial";

fetch(sodaspringsURL)
  .then((response) => response.json())
  .then((sodaspringsObject) => {
    //console.log(sodaspringsObject);

    document.getElementById("currentlysoda").textContent = sodaspringsObject.weather[0].main;
    document.getElementById("htsoda").textContent = sodaspringsObject.main.temp;
    document.getElementById("humsoda").textContent = sodaspringsObject.main.humidity;
    document.getElementById("wssoda").textContent = sodaspringsObject.wind.speed;

    const tempnumber = parseFloat(document.getElementById("htsoda").textContent);
//console.log(tempnumber);

const speedNumber = parseFloat(document.getElementById("wssoda").textContent);
//console.log(speedNumber);

let windchill = 35.74 + (0.6215 * tempnumber) - (35.75 * Math.pow(speedNumber, 0.16)) + (0.4275 * tempnumber * Math.pow(speedNumber, 0.16));
windchill = Math.round(windchill);
//console.log(windchill);

if (tempnumber <= 50 && speedNumber > 3) {
    document.getElementById("wcsoda").textContent = windchill;
}
  else {
      document.getElementById("wcsoda").textContent = "N/A";
  }
   //console.log(document.getElementById("wc"));






});