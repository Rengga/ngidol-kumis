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

$(document).on("click", ".navbar-list a, .navbar-list span", function () {
  $(".nav-list").hide("slow");
});

$(document).on("click", ".btn-queue", function () {
  $("body").addClass("overflow-hidden");
  $(".queue").slideDown("slow");
  $(".popup-iklan").addClass("border-putih");
});

$(document).on("click", ".tutup", function () {
  $("body").removeClass("overflow-hidden");
  $(".queue").slideUp("slow");
  $(".popup-iklan").removeClass("border-putih");
});

$(document).on("click", ".navbar-list a", function () {
  $("body").removeClass("overflow-hidden");
  $(".queue").slideUp("slow");
});

$(document).on("click", ".popup-iklan", function () {
  $(this).addClass("popup-iklan-close").removeClass("popup-iklan-show");
  setTimeout(() => {
    $(this).addClass("lft-minus-42");
  }, 1000);
  $(".iklan").fadeIn("fast");
});
$(document).on("click", ".close-iklan", function () {
  $(".popup-iklan").removeClass("popup-iklan-close lft-minus-42").addClass("popup-iklan-show");
  $(".iklan").fadeOut("fast");
});
