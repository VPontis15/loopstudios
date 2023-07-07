const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("hidden");
  navbar.classList.toggle("flex");
});
