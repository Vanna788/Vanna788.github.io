// Modified date
let lastdate = document.lastModified;
document.getElementById("date").innerHTML = "Last updated: " + lastdate;
// The year
let d = new Date();
let y = d.getFullYear();
document.getElementById("year").innerHTML = y;