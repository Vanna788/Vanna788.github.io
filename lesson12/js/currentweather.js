const apiURL = "https://api.openweathermap.org/data/2.5/weather?zip=77600,mx&appid=11eda4f6c23c30829f26d495b3e62fe3&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    document.getElementById("ctemp").innerHTML = jsObject.main.temp;
    document.getElementById("cc").innerHTML = jsObject.weather[0].description;
    document.getElementById("ch").innerHTML = jsObject.main.humidity;

  });