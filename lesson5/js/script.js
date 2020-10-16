
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

