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

$("#backToTop").click(function() {
  $("html, body").animate({ scrollTop: 0 }, 500);
});

var controller = new ScrollMagic.Controller();
var tl = new TimelineMax();

$("section").each(function() {
  let heading = $(this).find("#parallaxHeading");
  var tl = new TimelineMax();

  tl.from(this, 0.5, { opacity: 0, ease: Linear.easeNone }).to(heading, 1, {
    y: -75,
    ease: Linear.easeNone
  });

  new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: 0.4,
    duration: "100%"
  })
    .setTween(tl)
    .addTo(controller);
});
