/* ==========================================================================================
  Theme Name: Brush Sharp
  Author: Slide sigma
  Description: Cleaning Service HTML5 Template
  Version: 1.0
========================================================================================== */


/** =============== JS Index

01. Preloader fade out
02. Filter Gallery
03. Owl Sliders
04. Cout up number on scroll
05. Light slider
06. Magnific pop up
07. Mobile menu integration
08. Nice Selector
09. Wow animation 
10. Coming soon time count
11. Other js



=============== */
(function($) {
    "use strict";

    $(window).on('load', function() {

        /*------------------------------------------------------------------------------*/
        /*01. Preloader fade out
/*------------------------------------------------------------------------------*/

        $('.loader-out').delay('300').fadeOut(1000);

        // masonry gallery listing 
        var $portfolioGrid = $('.portfolio-filter').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                columnWidth: '.grid-sizer'
            }
        });

        /*------------------------------------------------------------------------------*/
        /*02. Filter Gallery
/*------------------------------------------------------------------------------*/


        // gallery filtering option buttons 
        $('.filter-gallery').on('click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $portfolioGrid.isotope({
                filter: filterValue
            });
        });

        // gallery & blog page button active style
        $('.btn-filter').on('click', function(e) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
        });
    });

    /*------------------------------------------------------------------------------*/
    /*03. Owl Sliders
/*------------------------------------------------------------------------------*/

    // Banner slider 1
    var banner1 = $('.main-slider');
    banner1.owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplayHoverPause: true,
        smartSpeed: 450,
        margin: 0,
        nav: true,
        navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
        dots: false
    });


    // Banner slider 2
    var banner2 = $('.main-slider-2');
    banner2.owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplayHoverPause: true,
        smartSpeed: 450,
        margin: 0,
        nav: true,
        navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
        dots: false
    });

    // blog slider
    var blogslide1 = $('.blog-slider');
    blogslide1.owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    // Custom blog nav buttons
    $('.blog-nav-icon.left').on('click', function() {
        event.preventDefault();
        blogslide1.trigger('prev.owl.carousel');
    });
    $('.blog-nav-icon.right').on('click', function() {
        event.preventDefault();
        blogslide1.trigger('next.owl.carousel');
    });

    // service slider
    var serviceslide = $('.service-slider');
    serviceslide.owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    // Custom service nav buttons
    $('.service-nav-icon.left').on('click', function() {
        event.preventDefault();
        serviceslide.trigger('prev.owl.carousel');
    });
    $('.service-nav-icon.right').on('click', function() {
        event.preventDefault();
        serviceslide.trigger('next.owl.carousel');
    });



    // team slider
    var teamslide = $('.team-slider');
    teamslide.owlCarousel({
        loop: true,
        margin: 40,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });
    // Custom service nav buttons
    $('.team-nav-icon.left').on('click', function() {
        event.preventDefault();
        teamslide.trigger('prev.owl.carousel');
    });
    $('.team-nav-icon.right').on('click', function() {
        event.preventDefault();
        teamslide.trigger('next.owl.carousel');
    });


    // team slider-2
    var teamslide2 = $('.team-slider-2');
    teamslide2.owlCarousel({
        loop: true,
        margin: 40,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });
    // Custom service nav buttons
    $('.team-nav-icon.left').on('click', function() {
        event.preventDefault();
        teamslide2.trigger('prev.owl.carousel');
    });
    $('.team-nav-icon.right').on('click', function() {
        event.preventDefault();
        teamslide2.trigger('next.owl.carousel');
    });

    // testimonial slider
    var testimonialSlide = $('.testimonial-2-slide');
    testimonialSlide.owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    // testimonial slider
    var testimonialSlide2 = $('.testimonial-3-slide');
    testimonialSlide2.owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    // clients logo slider
    var clientsSlide = $('.clients-slider');
    clientsSlide.owlCarousel({
        loop: true,
        margin: 110,
        autoplay: true,
        nav: false,
        dots: false,
        slideTransition: 'linear',
        autoplayTimeout: 5000,
        autoplaySpeed: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2,
                margin: 50
            },
            768: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });

    // portfolio slider
    var porfolioSlide = $('.porfolio-slide');
    porfolioSlide.owlCarousel({
        loop: true,
        margin: 0,
        autoplay: false,
        nav: true,
        navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
        dots: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 1
            },
            550: {
                items: 2
            },
            768: {
                items: 2
            },
            1000: {
                items: 5
            }
        }
    });

    // Blog listing slider 
    $('.slider-type-blog').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        nav: true,
        dots: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1,
                margin: 0
            },
            1200: {
                items: 1
            }
        }
    });

    // Relative product slider
    var reprdtSlider = $('.relative-prdt-slider');
    reprdtSlider.owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });
    // Custom blog nav buttons
    $('.prdt-nav-left').on('click', function() {
        event.preventDefault();
        reprdtSlider.trigger('prev.owl.carousel');
    });
    $('.prdt-nav-right').on('click', function() {
        event.preventDefault();
        reprdtSlider.trigger('next.owl.carousel');
    });




    /*------------------------------------------------------------------------------*/
    /*04. Cout up number on scroll
/*------------------------------------------------------------------------------*/
    $('.counter').counterUp({
        time: 2000
    });

    /*------------------------------------------------------------------------------*/
    /* 05. Light slider
    /*------------------------------------------------------------------------------*/

    // product detail image slider
    $('#image-gallery').lightSlider({
        gallery: true,
        item: 1,
        thumbItem: 5,
        slideMargin: 15,
        speed: 500,
        auto: false,
        loop: true,
        onSliderLoad: function() {
            $('#image-gallery').removeClass('cS-hidden');
        }
    });
    /*------------------------------------------------------------------------------*/
    /*06. Magnific pop up
/*------------------------------------------------------------------------------*/
    $('.popup-video').magnificPopup({
        type: 'iframe'
    });


    $('.gallery-links').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    /*------------------------------------------------------------------------------*/
    /*07. Mobile menu integration
/*------------------------------------------------------------------------------*/
    // Mobile menu integration index 1
    $('.main-menu-1').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991"
    });

    // Mobile menu integration index 2
    $('.main-menu-1.menu-2').meanmenu({
        meanMenuContainer: '.mobile-menu2',
        meanScreenWidth: "991"
    });

    // Mobile menu integration index 3
    $('.main-menu-1.menu-4').meanmenu({
        meanMenuContainer: '.mobile-menu-4',
        meanScreenWidth: "991"
    });

    /*------------------------------------------------------------------------------*/
    /*08. Nice Selector
/*------------------------------------------------------------------------------*/
    //nice select
    $('select').niceSelect(); // changing all select input style
    /*------------------------------------------------------------------------------*/
    /*09. Wow animation 
/*------------------------------------------------------------------------------*/
    new WOW().init();
    /*------------------------------------------------------------------------------*/
    /*10. Coming soon time count
/*------------------------------------------------------------------------------*/
    //coming soon date count 
    $('.clock').countdown('2020/10/10', function(event) {
        var $this = $(this).html(event.strftime('' +
            '<div class="week-count"><h1>%w <sup>Weeks</sup></h1></div>  ' +
            '<div class="hour-week d-flex  justify-content-center">  ' +
            '<div class="hour-count"><h1>%d <sup>Days</sup></h1></div>  ' +
            '<div class="hour-count"><h1>%H <sup>Hours</sup></h1></div>  ' +
            '<div class="min-count"> <h1>%M <sup>Mins</sup></h1> </div>  ' +
            '<div class="sec-count"> <h1>%S <sup>Sec</sup></h1> </div> ' +
            '</div>  '));
    });
    /*------------------------------------------------------------------------------*/
    /*11. Other js
/*------------------------------------------------------------------------------*/
    $(window).on('scroll', function() {
        //fix header1 on scroll
        var scroll1 = $(window).scrollTop();
        if (scroll1 < 100) {
            $(".head-type-1").removeClass("fixed-nav");
        } else {
            $(".head-type-1").addClass("fixed-nav");
        }

        //fix header2 on scroll
        var scroll2 = $(window).scrollTop();
        if (scroll2 < 100) {
            $(".head-type-2").removeClass("fixed-nav");
        } else {
            $(".head-type-2").addClass("fixed-nav");
        }


        ////fade in  footer button on scroll
        if ($(this).scrollTop() > 800) {
            $(".scroll-btn").addClass("opacity-10"); //showing scroll up button
        } else {
            $(".scroll-btn").removeClass("opacity-10"); //hiding scroll up button
        }

    });

    //scroll to top on cllick footer button
    $(".scroll-btn").on('click', function(event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 800);
    });

    // after before image integration
    
    $(".twentytwenty-container").twentytwenty({
        move_slider_on_hover: false,
        move_with_handle_only: false,
        click_to_move: true
    });



    // masonry gallery listing 
    var $portfolioGrid = $('.portfolio-filter').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
            columnWidth: '.grid-sizer'
        }
    });


    // gallery filtering option buttons 
    $('.filter-gallery').on('click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $portfolioGrid.isotope({
            filter: filterValue
        });
    });

// color switch
$( ".each-color.co1" ).on('click', function(e) {
    var data1 = $(this).data('color');
    $(".color-changing").attr('href', data1);
});

$( ".each-color.co2" ).on('click', function(e) {
    var data1 = $(this).data('color');
    $(".color-changing").attr('href', data1);
});

$( ".each-color.co3" ).on('click', function(e) {
    var data1 = $(this).data('color');
    $(".color-changing").attr('href', data1);
});

$( ".each-color.co4" ).on('click', function(e) {
    var data1 = $(this).data('color');
    $(".color-changing").attr('href', data1);
});

$( ".each-color.co5" ).on('click', function(e) {
    var data1 = $(this).data('color');
    $(".color-changing").attr('href', data1);
});

$( ".each-color.co6" ).on('click', function(e) {
    var data1 = $(this).data('color');
    $(".color-changing").attr('href', data1);
});




})(jQuery); // End jQuery