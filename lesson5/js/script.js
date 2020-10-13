
function menuTab() {

  document.getElementById("primaryNav").classList.toggle("hide");

}

const options = {weekday: "long", day: "numeric", month: "long", year: "numeric"};
document.getElementById("date").innerHTML = new Date().toLocaleDateString("en-US", options);



