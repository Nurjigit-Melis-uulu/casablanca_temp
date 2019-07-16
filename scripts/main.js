// Elements of navigation
const anchors = document.querySelectorAll('nav a[href*="#"]');
let menuButton = document.querySelector("#menu-button");
let backDrop = document.querySelector(".back-drop");
let drawer = document.querySelector("#drawer");
let strelka = document.querySelector(".strelka");
let boll = false;

// Elements of work page
let categories = document.querySelectorAll(".work-categories button");
let works = document.querySelectorAll(".work");

// Elements of carousel
let carouselButtons = document.querySelectorAll(".carousel_controls button");
let carouselSlides = document.querySelector(".carousel_slides");
let carousel = document.querySelector(".carousel");
let slideState = document.querySelector("#slide-state");
let slideActiveNumber = 1;
let carouselCount = 1;
let carouselPos = 0;

backDrop.addEventListener("click", function() {
  drawer.className = "";
  backDrop.style.display = "none";
  strelka.style.display = "none";
});

menuButton.addEventListener("click", function() {
  boll = !boll;

  if (boll) {
    strelka.style.display = "block";
    drawer.className = "active";
    backDrop.style.display = "block";
  } else {
    drawer.className = "";
    strelka.style.display = "none";
  }
});

categories.forEach(category => {
  category.addEventListener("click", function() {
    categories.forEach(e => (e.className = ""));
    this.className = "active";

    works.forEach(work => {
      if (work.className !== "work hidden") {
        work.className = "work hidden";
      }
      if (work.getAttribute("data-category") === category.value) {
        work.className = "work";
      } else if (category.value === "all") {
        work.className = "work";
      }
    });
  });
});

carouselButtons.forEach(button => {
  button.addEventListener("click", function() {
    let carouselWidth = getComputedStyle(carousel).getPropertyValue(
      "--carousel-width"
    );

    if (carouselWidth === " 960px") {
      carouselWidth = 960;
      carouselCount = 2;
    } else if (carouselWidth === " 640px") {
      carouselWidth = 640;
      carouselCount = 3;
    } else {
      carouselWidth = 320;
      carouselCount = 6;
    }

    if (
      this.getAttribute("data-direction") === "right" &&
      slideActiveNumber > 0 &&
      slideActiveNumber < carouselCount + 1
    ) {
      slideActiveNumber++;
      carouselPos += carouselWidth;
      carouselSlides.style.transform = `translateX(-${carouselPos}px)`;
    } else if (
      this.getAttribute("data-direction") === "left" &&
      slideActiveNumber <= carouselCount &&
      slideActiveNumber > 0
    ) {
      slideActiveNumber--;
      carouselPos -= carouselWidth;
      carouselSlides.style.transform = `translateX(-${carouselPos}px)`;
    }

    if (slideActiveNumber < 1) {
      slideActiveNumber = carouselCount;
      carouselPos = carouselWidth * (carouselCount - 1);
      carouselSlides.style.transform = `translateX(-${carouselPos}px)`;
    }

    if (slideActiveNumber > carouselCount) {
      slideActiveNumber = 1;
      carouselPos = 0;
      carouselSlides.style.transform = `translateX(${carouselPos}px)`;
    }

    slideState.innerHTML = slideActiveNumber;

    console.log(slideActiveNumber, carouselWidth, carouselCount, carouselPos);
  });
});

for (let anchor of anchors) {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    drawer.className = "";
    backDrop.style.display = "none";
    strelka.style.display = "none";

    const blockID = anchor.getAttribute("href");

    if (anchor.getAttribute("href") === "#") {
      document.querySelector("body").scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    } else {
      document.querySelector("" + blockID).scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }

    for (let link of anchors) {
      if (link.getAttribute("href") === blockID) {
        link.className = "active";
      } else {
        link.className = "";
      }
    }
  });
}
