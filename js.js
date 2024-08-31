let ul = document.getElementById("megamenu");
let bars = document.getElementById("bars");

bars.addEventListener("click", function () {
  if (ul.style.display === "none") {
    ul.style.display = "flex";
    ul.classList.add("display");
  } else {
    ul.style.display = "none";
    ul.classList.remove("display");
  }
});
