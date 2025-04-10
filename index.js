// document.addEventListener("scroll", () => {
//   const header = document.querySelector("header");

//   if (window.scrollY > 0) {
//     header.classList.add("scrolled");
//   } else {
//     header.classList.remove("scrolled");
//   }
// });

const navbar = document.getElementById("menu-i");
const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");

openBtn.addEventListener("click", function () {
  console.log("Opening navbar");
  navbar.classList.add("active");
  console.log("Current classes on navbar:", navbar.classList);
});

closeBtn.addEventListener("click", function () {
  console.log("Closing navbar");
  navbar.classList.remove("active");
  console.log("Current classes on navbar:", navbar.classList);
});

//about section
const about = document.querySelector(".mv-bx");
const btns = document.querySelectorAll(".tab-btn");
const details = document.querySelectorAll(".content");

about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    //remove active from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    //hide all details
    details.forEach(function (detail) {
      detail.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});

//copyright date
const dates = document.getElementById("date");

dates.innerHTML = new Date().getFullYear();

//slider
var slideImg = document.getElementById("slideImg");

var images = [
  "img/hero-01.jpg",
  "img/hero-02.jpg",
  "img/hero-03.jpg",
  "img/hero-05.jpg",
];

var len = images.length;
var i = 0;

window.addEventListener("load", function () {
  function slider() {
    if (i >= len) {
      i = 0;
    }
    slideImg.src = images[i];
    i++;
    setTimeout(slider, 3000); // Corrected 'serTimeout' to 'setTimeout'
  }
  slider();
});
