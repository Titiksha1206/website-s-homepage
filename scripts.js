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
