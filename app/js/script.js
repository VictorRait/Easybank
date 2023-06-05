const btnHamburger = document.querySelector("#btnHamburger");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeEls = document.querySelectorAll(".has-fade");
const toggleF = function () {
  // nav btn overlay
  header.classList.toggle("open");
  overlay.classList.toggle("fade-in");
  overlay.classList.add("display-block");
  if (!overlay.classList.contains("fade-in")) {
    overlay.classList.add("fade-out");
    setTimeout(() => {
      overlay.classList.remove("fade-out");
      overlay.classList.remove("display-block");
    }, 500);
  }

  // nav menu
  fadeEls.forEach((fade) => {
    if (!fade.classList.contains("fade-in")) {
      fade.classList.add("fade-in");
      setTimeout(() => {
        fade.classList.remove("fade-out");
      }, 500);
    } else {
      fade.classList.add("fade-out");
      setTimeout(() => {
        fade.classList.remove("fade-out");
        fade.classList.remove("fade-in");
      }, 500);
    }
  });
};
btnHamburger.addEventListener("click", toggleF);
overlay.addEventListener("click", toggleF);
