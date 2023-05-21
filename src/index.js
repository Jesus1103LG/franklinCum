const $ = (selector) => document.querySelector(selector);

// Carrusel

const leftBtn = $(".arrowLeft-icon_img");
const rightBtn = $(".arrowRight-icon_img");
const imgs = document.getElementById("imagen");
const img = document.querySelectorAll("#imagen img");

let idx = 0;

let interval = setInterval(run, 2000);

function run() {
  idx++;
  changeImage();
}

function changeImage() {
  if (screen.width <= 480) {
    if (idx > img.length - 5) {
      idx = 0;
    } else if (idx < 0) {
      idx = img.length - 5;
    }
    imgs.style.transform = `translateX(${-idx * 174}px)`;
  } else {
    if (idx > img.length - 6) {
      idx = 0;
    } else if (idx < 0) {
      idx = img.length - 6;
    }
    imgs.style.transform = `translateX(${-idx * 150}px)`;
  }
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 2000);
}

rightBtn.addEventListener("click", () => {
  idx++;
  changeImage();
  resetInterval();
});

leftBtn.addEventListener("click", () => {
  idx--;
  changeImage();
  resetInterval();
});
