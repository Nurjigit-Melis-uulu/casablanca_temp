// Elements of navigation
const anchors = document.querySelectorAll('a[href*="#"]');
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
let slideActiveNumber = 1;

backDrop.addEventListener("click", function() {
  drawer.className = "";
  backDrop.style.display = "none";
  strelka.style.display = "none";
});

menuButton.addEventListener("click", function() {
  boll = !boll;

  console.log(drawer.childNodes);

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
    if (this.getAttribute("data-direction") === "right") {
      if (slideActiveNumber === 1) {
        slideActiveNumber++;
      } else {
        slideActiveNumber = 1;
      }
    } else {
      if (slideActiveNumber === 2) {
        slideActiveNumber--;
      } else {
        slideActiveNumber = 2;
      }
    }

    if (slideActiveNumber === 1) {
      carouselSlides.style.transform = "translateX(0)";
      carouselBtnActivation(0);
    } else {
      carouselSlides.style.transform = "translateX(-50%)";
      carouselBtnActivation(1);
    }
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

    for (let link of links) {
      if (link.getAttribute("href") === blockID) {
        link.className = "active";
      } else {
        link.className = "";
      }
    }
  });
}

function carouselBtnActivation(params) {
  for (let i = 0; i < carouselButtons.length; i++) {
    carouselButtons[i].className = "";
    carouselButtons[params].className = "active";
  }
}
