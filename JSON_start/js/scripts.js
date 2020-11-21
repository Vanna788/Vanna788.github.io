//ADD the key and change units to imperial
const apiURL = "https://api.openweathermap.org/data/2.5/weather?zip=02111,us&appid=11eda4f6c23c30829f26d495b3e62fe3&units=imperial";

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherinfo) => {
    //Once it comes back, display it to the console.
    console.log(weatherinfo);

    document.getElementById('place').innerHTML = weatherinfo.name;
    document.getElementById('currentTemp').innerHTML = weatherinfo.main.temp;
    document.getElementById('windSpeed').innerHTML = weatherinfo.wind.speed;

    const iconcode = weatherinfo.weather[0].icon;
    const icon_path = 'https://openweathermap.org/img/w/' + iconcode + '.png';
    document.getElementById("weather_icon").src = (icon_path);


    console.log(iconcode);
    console.log(icon_path);

    

    
    

 }); //end of "then" fat arrow function



