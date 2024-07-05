$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: false,
  });
});

$(document).on("click", ".menu", function () {
  $(this).addClass("pointer-events-none");
  setTimeout(function () {
    console.log("sds");
    $(".menu").removeClass("pointer-events-none");
  }, 600);
  $(".nav-list").fadeToggle("slow");
});

$(document).on("click", ".nav-list a", function () {
  $(".nav-list").hide("slow");
});
