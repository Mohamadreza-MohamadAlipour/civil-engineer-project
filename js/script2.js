$(document).ready(function () {
  var typed = new Typed('#typed', {
    strings: [
      'با برترین مهندسین',
      'یعنی بروزترین ابزارها',
      'تضمین صد در صدی کار'
    ],
    loop: true,
    typeSpeed: 50,
    backSpeed: 50
  })

  $('.owl-carousel').owlCarousel({
    rtl: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 6000,
    nav: true,
    margin: 10,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
      992: {
        items: 3
      },
      1200: {
        items: 4
      }
    }
  })
})
