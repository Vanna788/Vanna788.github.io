const rentalsURL = "https://vanna788.github.io/lesson12/data/prices.json";

fetch(rentalsURL)
  .then((response) => response.json())
  .then((rentalObj) => {
     console.log(rentalObj);

     

     document.getElementById('scooters').innerHTML = 'Scoots offers three types of Honda motor scooters, the Metro, Dio, and the PCX150.' + 'The Metro reserved is $' +
      rentalObj.rentals[0].resHalfday + ' for half a day or for a full day $' + rentalObj.rentals[0].resFullday + '.' + 'The walk-in price is $' + rentalObj.rentals[0].walkHalfday + ' for half a day and $' +rentalObj.rentals[0].walkFullday 
      + ' for a full day.' + 'The Dio reserved is $' + rentalObj.rentals[1].resHalfday + ' half day or $' + rentalObj.rentals[1].resFullday + ' full day.' 
      + 'Walk-in it is $' + rentalObj.rentals[1].walkHalfday + ' half day or $' + rentalObj.rentals[1].walkFullday + ' full day.' + 
      'The PCX150 reserved is $' + rentalObj.rentals[2].resHalfday + ' half day or $' + rentalObj.rentals[2].resFullday + 
      ' full day. Walk in it is $' + rentalObj.rentals[2].walkHalfday + ' halfday or $' + rentalObj.rentals[2].walkFullday + ' full day. 12 AND UNDER CAN NOT RIDE THE SCOOTERS!';

      document.getElementById('atv').innerHTML = 'Scoots has one choice of side-by-side ATV, the Honda Pioneer 1000! Reserved half day costs $' + 
      rentalObj.rentals[3].resHalfday + ' or for full day is $' + rentalObj.rentals[3].resFullday + '. For walk-in half day it is $' 
      + rentalObj.rentals[3].walkHalfday + ' or for a full day it is $' + rentalObj.rentals[3].walkFullday + '.';

      document.getElementById('jeeps').innerHTML = 'Scoots offers two different options of Jeep Wrangler; four door manual with a/c or two door manual open air. The four door reserved is $' + 
      rentalObj.rentals[4].resHalfday + ' for half a day, or for a full day $' + rentalObj.rentals[4].resFullday + '. For walk-in half day it is $' + rentalObj.rentals[4].walkHalfday + '. Full day costs $' + rentalObj.rentals[4].walkFullday + 
      '. The two door reserved for half a day is $' + rentalObj.rentals[5].resHalfday + ' or a full day is $' + rentalObj.rentals[5].resFullday + 
      '. For walk-in is costs $' + rentalObj.rentals[5].walkHalfday + ' for half a day and $' + rentalObj.rentals[5].walkFullday + ' for a full day.';
  });