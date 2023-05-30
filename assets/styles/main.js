const myArrow = document.getElementById("arrow");
const myShape = document.querySelector(".shape");
const myBtn = document.querySelector(".btn");

let state = "rotate(180deg)";
let state1 = "1";

myArrow.addEventListener("click", () => {
  myArrow.style.transform = state;
  state = state == "rotate(180deg)" ? "rotate(360deg)" : "rotate(180deg)";
});

myBtn.addEventListener("click", () => {
  myShape.style.opacity = state1;
  state1 = state1 == "1" ? "0" : "1";
  myArrow.style.transform = state;
  state = state == "rotate(180deg)" ? "rotate(360deg)" : "rotate(180deg)";
});



window.onload = function () {
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");

  prevBtn.addEventListener("click", function () {
    prevSlide();
  });
  nextBtn.addEventListener("click", function () {
    nextSlide();
  });
};
let slideNumber = 0;
const prevSlide = () => {
  const slides = document.getElementsByClassName("slides");
  const slider = document.getElementById("slider");
  const currentSlide = slider.getElementsByClassName("current");
  currentSlide[0].classList.remove("current");
  if (slideNumber == 0) {
    slideNumber = slides.length - 1;
  } else {
    slideNumber = slideNumber - 1;
  }
  slides[slideNumber].classList.add("current");
};
const nextSlide = () => {
  const slides = document.getElementsByClassName("slides");
  const slider = document.getElementById("slider");
  const currentSlide = slider.getElementsByClassName("current");
  currentSlide[0].classList.remove("current");
  if (slideNumber == slides.length - 1) {
    slideNumber = 0;
  } else {
    slideNumber = slideNumber + 1;
  }
  slides[slideNumber].classList.add("current");
};


document.addEventListener('DOMContentLoaded', () =>
  requestAnimationFrame(updateTime)
)

function updateTime() {
  const customDay = "14";
  const customHour = "23";

  document.documentElement.style.setProperty('--timer-day', "'" + customDay + "'");
  document.documentElement.style.setProperty('--timer-hours', "'" + customHour + "'");
  document.documentElement.style.setProperty('--timer-minutes', "'" + moment().format("mm") + "'");
  document.documentElement.style.setProperty('--timer-seconds', "'" + moment().format("ss") + "'");
  requestAnimationFrame(updateTime);
}
