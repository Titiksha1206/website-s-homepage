$(document).ready(function () {
  // Open the Contact Us modal when the button is clicked
  $("#contactUsBtn, #contactUsBtnMain").on("click", function () {
    $("#contactUsModal").modal("show");
  });

  // Custom JavaScript or jQuery functions can be added here
  console.log("Page loaded and ready");
});

$(document).ready(function () {
  $("#contactUsBtn, #contactUsBtnMain").on("click", function () {
    $("#contactUsModal").modal("show");
  });

  // Initialize the carousel
  $("#whatWeDoCarousel").carousel({
    interval: 5000,
  });

  //   Handle project image change on content click
  $("#projectList a").on("click", function (e) {
    e.preventDefault();
    var newImage = $(this).data("image");
    $("#projectImage").attr("src", newImage);
    $("#projectList a").removeClass("active");
    $(this).addClass("active");
  });
});
