
function menuTab() {

  document.getElementById("primaryNav").classList.toggle("hide");

}

const options = {weekday: "long", day: "numeric", month: "long", year: "numeric"};
document.getElementById("date").innerHTML = new Date().toLocaleDateString("en-US", options);

const today = new Date();
console.log(today);
const dayNumber = today.getDay();
console.log(dayNumber);
const element = document.getElementById("pancake");

if (dayNumber == 5) {
  element.classList.add("showme");
}
else {
  element.classList.add("hideme");
}
//rating
function adjustRating(rating) {
  document.getElementById("ratingvalue").innerHTML = rating;
}

function selectResponse() {
const s = document.querySelector('#selected')
const sel = document.querySelector('#selectbrowser');
s.style.display = "block";
s.textContent = sel.value;

}






