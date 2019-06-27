// Elements of navigation
let menuButton = document.querySelector("#menu-button");
let backDrop = document.querySelector(".back-drop");
let drawer = document.querySelector("#drawer");
let boll = false;

// Element of work page
let categories = document.querySelectorAll(".work-categories button");
let works = document.querySelectorAll(".work");

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
