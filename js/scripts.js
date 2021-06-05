// header menu
jQuery(function($){
    const $menu = $('.mobile-head-menu');
    $(document).mouseup(e => {
        if (!$menu.is(e.target)
            && $menu.has(e.target).length === 0)
        {
            $menu.removeClass('show');
        }
    });
    $('.menu-link').on('click', () => {
        $menu.toggleClass('show');
    });
    $('.close-menu-button').on('click', () => {
        $menu.removeClass('show');
    });
    $('.head-menu-link').on('click', () => {
        $menu.removeClass('show');
    });
});
// end header menu


// carousel

jQuery(function($){
    var $status = $('.counter');
    var $slickElement = $('.top-carousel');
    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.text(i + ' ' + '/' + ' ' + slick.slideCount);
    });
    $slickElement.slick({
        slide: '.slide',
        autoplay: true,
        fade: true,
        dots: false
    });
});

jQuery(function($){
    $('.portfolio-carousel').slick({
        dots: false,
        arrows: true,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 959,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 360,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

// end carousel

// animate
jQuery(function($){
    jQuery('.header-section, .footer-section').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: 0
    });
    jQuery('.top-carousel-section, .advantages-section, .portfolio-section, .price-section, .about-section, .backcall-section').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: 100
    });
    jQuery('.services-section .title-block').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInLeft',
        offset: 100
    });
    jQuery('.services-section .button-box').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInRight',
        offset: 100
    });
    jQuery('.about-section p, .about-section ul li').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 100
    });
    jQuery('.portfolio-section h2, .price-section h2, .about-section h2, .backcall-section h2').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInDown',
        offset: 100
    });
    jQuery('.price-section .price-list li').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated zoomIn',
        offset: 100
    });
    jQuery('.service-box, .backcall-section form').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated flipInX',
        offset: 100
    });
});
// end animate

// anchor
jQuery(function($){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
});
// end anchor