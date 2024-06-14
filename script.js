const stars = document.querySelectorAll(".star");
const theStar = document.getElementById("star7");
const poleStar = document.getElementById("star");

stars.forEach((star) => {
  if (star !== theStar) {
    star.addEventListener("click", () => {
      stars.forEach((s) => (s.style.border = "none"));
      star.style.border = "2px solid #ff0000";
    });
  }
});

theStar.addEventListener("click", () => {
  stars.forEach((s) => (s.style.border = "none"));
  theStar.classList.replace("star", "star-inserted");
  poleStar.style.display = "none";

  const popUp = document.getElementById("done");
  popUp.style.display = "flex";
});
