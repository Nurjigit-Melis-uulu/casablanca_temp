let menuButton = document.querySelector("#menu-button");
let backDrop = document.querySelector(".back-drop");
let drawer = document.querySelector("#drawer");
let boll = false;

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
