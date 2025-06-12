$(document).ready(function () {
  var swiper = new Swiper('.swiper-container.two', {
    paginationClickable: true,
    effect: 'coverflow',
    loop: true,
    centeredSlides: true,
    slidesPerView: 3,
    autoplay: 3000,
    autoplayDisableOnInteraction: true,
    coverflow: {
      rotate: 0,
      stretch: 100,
      depth: 10,
      modifier: 1.5,
      slideShadows: false
    }
  });

  // Pause on hover
  $('.swiper-container.two').hover(
    function () {
      swiper.stopAutoplay();
    },
    function () {
      swiper.startAutoplay();
    }
  );
});
