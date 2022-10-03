const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});

let count = 0;
nextBtn.addEventListener("click", function () {
  count++;
  carousel();
});
prevBtn.addEventListener("click", function () {
  count--;
  carousel();
});

function carousel() {
  // Working with buttons
  if (count < 1) {
    prevBtn.style.display = `none`;
  } else {
    prevBtn.style.removeProperty("display");
  }
  if (count === slides.length) {
    nextBtn.style.display = `none`;
  } else {
    nextBtn.style.removeProperty("display");
  }
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${count * 100}%)`;
  });
}
