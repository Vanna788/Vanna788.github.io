const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=11eda4f6c23c30829f26d495b3e62fe3&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    document.getElementById("currently").innerHTML = jsObject.weather[0].main;
    document.getElementById("ht").innerHTML = jsObject.main.temp;
    document.getElementById("hum").innerHTML = jsObject.main.humidity;
    document.getElementById("ws").innerHTML = jsObject.wind.speed;




    

  });