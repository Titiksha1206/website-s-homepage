$(document).ready(function () {
  // Open the Contact Us modal when the button is clicked
  $("#contactUsBtn, #contactUsBtnMain").on("click", function () {
    $("#contactUsModal").modal("show");
  });

  // Custom JavaScript or jQuery functions can be added here
  console.log("Page loaded and ready");
});

$(document).ready(function () {
  // Change project image on click
  $(".project-list li").click(function () {
    var newImage = $(this).data("image");
    $("#project-image").attr("src", newImage);
    $(".project-list li").removeClass("active");
    $(this).addClass("active");
  });
});

// Reference To Buttons
var btnLeft = document.getElementById("radio1");
var btnRight = document.getElementById("radio2");
var btnRights = document.getElementById("radio3");

// Reference To Slider
var slider = document.querySelector(".container .slides");

btnRight.addEventListener("click", nextSlide);
function nextSlide() {
  slider.appendChild(slider.firstElementChild);
}

btnRights.addEventListener("click", nextSlide);
function nextSlide() {
  slider.appendChild(slider.firstElementChild);
}

btnLeft.addEventListener("click", prevSlide);
function prevSlide() {
  slider.prepend(slider.lastElementChild);
}

// Auto Sliding
function autoSlide() {
  deleteInterval = setInterval(timer, 1000);
  function timer() {
    nextSlide();
  }
}
autoSlide();

// Stop Auto Sliding When Mouse is Over
slider.addEventListener("mouseover", deleteAutoSliding);
btnRight.addEventListener("mouseover", deleteAutoSliding);
btnRights.addEventListener("mouseover", deleteAutoSliding);
btnLeft.addEventListener("mouseover", deleteAutoSliding);

function deleteAutoSliding() {
  clearInterval(deleteInterval);
}

// Resume Auto Sliding When Mouse is Out
slider.addEventListener("mouseout", autoSlide);
btnRight.addEventListener("mouseout", autoSlide);
btnRights.addEventListener("mouseout", autoSlide);
btnLeft.addEventListener("mouseout", autoSlide);
