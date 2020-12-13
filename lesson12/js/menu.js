function menuTab() {

    document.getElementById("primaryNav").classList.toggle("hide");
  
  }

  // Modified date
let lastdate = document.lastModified;
document.getElementById("date").innerHTML = "Last updated: " + lastdate;

  // price!

  const URL = "https://vanna788.github.io/lesson12/data/prices.json";

  fetch(URL)
  .then((response) => response.json())
  .then((rentalObj) => {
     console.log(rentalObj);

     document.getElementById('price').innerHTML = rentalObj.rentals[0].resHalfday + '$';

  });
  