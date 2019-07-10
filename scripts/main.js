// Elements of navigation
let menuButton = document.querySelector("#menu-button");
let backDrop = document.querySelector(".back-drop");
let drawer = document.querySelector("#drawer");
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
});

menuButton.addEventListener("click", function() {
  boll = !boll;

  if (boll) {
    drawer.className = "active";
    backDrop.style.display = "block";
  } else {
    drawer.className = "";
  }
});

categories.forEach(category => {
  category.addEventListener("click", function() {
    categories.forEach(e => (e.className = ""));
    this.className = "active";

    works.forEach(work => {
      work.style.display = "none";
      if (work.getAttribute("data-category") === category.value) {
        work.style.display = "block";
      }
      if (category.value === "all") {
        work.style.display = "block";
      }
    });
  });
});

carouselButtons.forEach(button => {
  button.addEventListener("click", function() {
    let direct = this.getAttribute("data-direction");

    if (direct === "right") {
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
    } else {
      carouselSlides.style.transform = "translateX(-50%)";
    }
  });
});
