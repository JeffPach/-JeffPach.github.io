$(window).scroll(function() {
  $(".menu-toggle").removeClass("open");
  $(".menu, .item-link").removeClass("show");
});

$('a[href^="#anchor"]').on("click", function(e) {
  e.preventDefault();

  $("html, body").animate(
    {
      scrollTop: $($(this).attr("href")).offset().top
    },
    300,
    "swing"
  );
});

$(document).ready(function() {
  menuToggle();
  createButton();
});

function menuToggle() {
  $(".menu-toggle").click(function() {
    $(this).toggleClass("open");
    $(".menu, .item-link").toggleClass("show");
  });

  $(".item-link").each(function() {
    $(this).click(function() {
      $(".item-link").removeClass("show");
    });
  });
}
function createButton() {
  $(".add-button a")
    .addClass("button heading-title heading-title--sm all-caps default-arrow")
    .append('<i class="uil uil-arrow-right"></i>');
}

$("#backToTop").click(function () {
  $("html, body").animate({scrollTop: 0}, 500);
});
