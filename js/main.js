$( document ).ready(function() {
  $(".anima-row").slick({
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 3000,
    cssEase: "linear",
    variableWidth: true,
    arrows: false,
  }),
  $(".review-slider").slick({
    infinite: true,
    dots: false,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 0,
    slidesToShow: 1,
    slidesToScroll: 1
  });
  $(".ex-slider").slick({
    infinite: true,
    dots: true,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    
  })
  $(".slider-people").slick({
    infinite: false,
    dots: false,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2
        }
      },

      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1
        }
      },
    ]
  });
  let accordion = $(".accordion-content");
  accordion.hide(),
  $(".active .accordion-content").slideDown(),
  $(".accordion-row").click((function() {
      $(this).hasClass("active") ? $(this).removeClass("active").find(accordion).slideUp() : (accordion.slideUp(),
      $(".accordion-row.active").removeClass("active"),
      $(this).addClass("active").find(accordion).slideDown())
  }))

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 600) {
      $('.fixed-btn').addClass('active');
    } else {
      $('.fixed-btn').removeClass('active');
    }
  });
  
});