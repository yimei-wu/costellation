const stars = document.querySelectorAll(".star");
const theStar = document.getElementById("star7");
const poleStar = document.getElementById("star");

stars.forEach((star) => {
  if (star !== theStar) {
    star.addEventListener("click", () => {
      stars.forEach((s) => s.classList.replace("wrong-star", "star"));
      star.classList.replace("star", "wrong-star");
    });
  }
});

theStar.addEventListener("click", () => {
  stars.forEach((s) => s.classList.replace("wrong-star", "star"));
  theStar.classList.replace("star", "star-inserted");
  poleStar.style.display = "none";

  const popUp = document.getElementById("done");
  popUp.style.display = "flex";
});
