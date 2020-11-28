const sodaurl = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(sodaurl)
.then((response) => response.json())
  .then((sodalist) => {
      console.log(sodalist);

      const towns = sodalist['towns'];

      let div = document.createElement('div');
      let h3 = document.createElement('h3');
      
      
      
      h3.textContent = 'Events in our area!';
      


      div.appendChild(h3);
      





      document.querySelector('section.sodaevents').appendChild(div);

      for(let i = 0; i < towns[6].events.length; i++) {
          let p = document.createElement('p');
          p.textContent = towns[6].events[i];
          div.appendChild(p);

      }
  });