


$(document).ready(function () {

  var animation = bodymovin.loadAnimation({
    container: document.getElementById('bm'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: 'data.json'
  })

  // WOW js
  new WOW().init();

  // SmiithScroll
  var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    easing: 'easeOutCubic'
  });

  // Skrollr
  if ($('html').hasClass('no-touchevents')) {
    var s = skrollr.init()
  }



  // Waypoints
  var sticky = new Waypoint.Sticky({
    element: $('.header')[0]
  })



  var carouselWaypoint = new Waypoint({
    element: document.getElementById('how-it-works'),
    handler: function() {
      console.log('Carousel reached');
      startCarousel();
    },
    offset: 100
  })

  var browserWidth = $(window).width();

  $(window).resize(function () {
    var browserWidth = $(window).width();
    console.log(browserWidth)
  });

  if (browserWidth > 768) {
    console.log('Desktop');
    // Show/Hide Header on scroll
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('.header').outerHeight();

    // on scroll, let the interval function know the user has scrolled
    $(window).scroll(function (event) {
      didScroll = true;
    });
    // run hasScrolled() and reset didScroll status
    setInterval(function () {
      if (didScroll) {
        hasScrolled();
        didScroll = false;
      }
    }, 250);
    function hasScrolled() {
      // do stuff here...
      var st = $(this).scrollTop();
      // var introHeight = 800
      var introHeight = $(window).height();
      // console.log("Window height " + introHeight);
      // Make sure they scroll more than delta
      if (Math.abs(lastScrollTop - st) <= delta)
        return;

      // If they scrolled down and are past the navbar, add class .nav-up.
      // This is necessary so you never see what is "behind" the navbar.
      if (st > lastScrollTop && st > introHeight) {
        // Scroll Down
        $('.header').removeClass('nav-down').addClass('nav-up');
      } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
          $('.header').removeClass('nav-up').addClass('nav-down');
        }
      }

      lastScrollTop = st;
      // console.log(st);
    }

  }


  // Animated Carousel Progress Bar

  var percent = 0, bar = $('.transition-timer-carousel-progress-bar'), crsl = $('#carouselHowItWorks');
  crsl.carousel({
    pause: true,
    interval: 5000
  })

  function progressBarCarousel() {
    bar.css({ width: percent + '%' });
    percent = percent + 0.5;
    if (percent > 100) {
      percent = 0;
      crsl.carousel('next');
    }
  }
  crsl.carousel({
    interval: false,
    pause: true
  }).on('slid.bs.carousel', function () { });
  var barInterval = setInterval(progressBarCarousel, 20);
  crsl.hover(
    function () {
      clearInterval(barInterval);
    },
    function () {
      barInterval = setInterval(progressBarCarousel, 20);
  })

  function startCarousel() {
      console.log('Carousel started');
      crsl.carousel({
        pause: false,
        interval: 4000
      })
    }


});
