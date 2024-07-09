$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: false,
  });

  if ($(".menu").is(":visible")) {
    $(".nav").addClass("bg-faf");
  }

  scroll();
});

function scroll() {
  $(window).scroll(function () {
    let scroll = $(window).scrollTop();
    if (scroll > 10) {
      $(".nav").addClass("bg-faf");
    } else {
      $(".nav").removeClass("bg-faf");
      if ($(".menu").is(":visible")) {
        $(".nav").addClass("bg-faf");
      }
    }
  });
}

$(document).on("click", ".menu", function () {
  $(this).addClass("pointer-events-none");
  setTimeout(function () {
    $(".menu").removeClass("pointer-events-none");
  }, 600);
  $(".nav-list").toggle("slow");
});

$(document).on("click", ".nav-list a", function () {
  $(".nav-list").hide("slow");
});
