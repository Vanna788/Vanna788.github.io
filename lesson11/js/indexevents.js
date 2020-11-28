const prestonurl = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(prestonurl)
.then((response) => response.json())
  .then((prestonlist) => {
      console.log(prestonlist);

      const towns = prestonlist['towns'];

      let div = document.createElement('div');
      let h3 = document.createElement('h3');
      
      
      
      h3.textContent = 'Events in our area!';
      


      div.appendChild(h3);
      





      document.querySelector('section.prestonevents').appendChild(div);

      for(let i = 0; i < towns[5].events.length; i++) {
          let p = document.createElement('p');
          p.textContent = towns[5].events[i];
          div.appendChild(p);

      }
  });