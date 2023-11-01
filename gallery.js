var close_button = document.getElementById("close-btn");
var full_img_box = document.getElementById("fullImgBox");
var full_img = document.getElementById("fullImg");

close_button.addEventListener("click", function () {
  full_img_box.style.display = "none";
});

function fullImage(pic) {
  full_img_box.style.display = "flex";
  full_img.src = pic;
}
