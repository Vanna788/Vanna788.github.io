const fishurl = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(fishurl)
.then((response) => response.json())
  .then((fishlist) => {
      console.log(fishlist);

      const towns = fishlist['towns'];

      let div = document.createElement('div');
      let h3 = document.createElement('h3');
      
      
      
      h3.textContent = 'Events in our area!';
      


      div.appendChild(h3);
      





      document.querySelector('section.fishevents').appendChild(div);

      for(let i = 0; i < towns[1].events.length; i++) {
          let p = document.createElement('p');
          p.textContent = towns[1].events[i];
          div.appendChild(p);

      }
  });