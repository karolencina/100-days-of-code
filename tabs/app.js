// Select about
const about = document.querySelector(".about");
// Target all buttons
const btns = document.querySelectorAll(".tab-btn");
// Get all articles (they all have class .content)
const articles = document.querySelectorAll(".content");

// Attach an event listener of a click event to about
about.addEventListener("click", function (e) {
  // See what is clicked:
  console.log(e.target);
  const id = e.target.dataset.id;
  if (id) {
    // Remove active from all buttons
    btns.forEach(function (btn) {
      // Remove from old button
      btn.classList.remove("active");
      // Add class to clicked button
      e.target.classList.add("active");
    });
    // Hide all the articles
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
