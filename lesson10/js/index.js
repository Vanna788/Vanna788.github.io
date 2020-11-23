const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    
 //console.table(jsonObject);  // temporary checking for valid response and data parsing
 const towns = jsonObject['towns']; 

 for (let i = 0; i < towns.length; i++) {

  if (i == 1) {
      let card = document.createElement('section');
      let image = document.createElement('img');
      let div = document.createElement('div');
      let h2 = document.createElement('h2');
      let span = document.createElement('div');
      let date = document.createElement('p');
      let pop = document.createElement('p');
      let rain = document.createElement('p');
      
      
      image.setAttribute('src', 'images/fishhaven1.jpg');
      image.setAttribute('alt', 'Plains');
      image.setAttribute('class', 'fishhaven');
      div.setAttribute('class', 'town1');
      h2.textContent = towns[1].name;
      span.textContent = towns[1].motto;
      date.textContent = "Date Founded: " + towns[1].yearFounded;
      pop.textContent = "Population: " + towns[1].currentPopulation;
      rain.textContent = "Annual rain fall: " + towns[1].averageRainfall;
     
      card.appendChild(image);
      card.appendChild(div);
      div.appendChild(h2);
      div.appendChild(span);
      div.appendChild(date);
      div.appendChild(pop);
      div.appendChild(rain);
    
      

    document.querySelector('div.towns').appendChild(card);
  }

  else if (i == 5) {
    let card = document.createElement('section');
    let div = document.createElement('div');
    let h2 = document.createElement('h2');
    let span = document.createElement('div');
      let date = document.createElement('p');
      let pop = document.createElement('p');
      let rain = document.createElement('p');
      let image = document.createElement('img');

      div.setAttribute('class', 'town2');
      h2.textContent = towns[5].name;
      span.textContent = towns[5].motto;
      date.textContent = "Date Founded: " + towns[5].yearFounded;
      pop.textContent = "Population: " + towns[5].currentPopulation;
      rain.textContent = "Annual rain fall: " + towns[5].averageRainfall;
      image.setAttribute('src', 'images/preston1.jpg');
      image.setAttribute('alt', 'A Mountainside');
      image.setAttribute('class', 'preston');
      

    card.appendChild(div);
    div.appendChild(h2);
    div.appendChild(span);
      div.appendChild(date);
      div.appendChild(pop);
      div.appendChild(rain);
      card.appendChild(image);

    

  document.querySelector('div.towns').appendChild(card);
      
  }

  else if (i == 6) {
    let card = document.createElement('section');
    let image = document.createElement('img');
    let div = document.createElement('div');
    let h2 = document.createElement('h2');
    let span = document.createElement('div');
      let date = document.createElement('p');
      let pop = document.createElement('p');
      let rain = document.createElement('p');

    image.setAttribute('src', 'images/soda1.jpg');
    image.setAttribute('alt', 'A Lake');
    div.setAttribute('class', 'town3');
    h2.textContent = towns[6].name;
    span.textContent = towns[6].motto;
    date.textContent = "Date Founded: " + towns[6].yearFounded;
    pop.textContent = "Population: " + towns[6].currentPopulation;
    rain.textContent = "Annual rain fall: " + towns[6].averageRainfall;
     
      

  
    card.appendChild(image);
    card.appendChild(div);
    div.appendChild(h2);
    div.appendChild(span);
      div.appendChild(date);
      div.appendChild(pop);
      div.appendChild(rain);
      


  document.querySelector('div.towns').appendChild(card);
      
  }
     
    
 
    
 }




  



});