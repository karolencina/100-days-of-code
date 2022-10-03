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
  // Working with slides
  if (count === slides.length) {
    count = 0;
  }
  if (count < 0) {
    count = slides.length - 1;
  }
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${count * 100}%)`;
  });
}
