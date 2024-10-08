(function ($) {
    "use strict";

    $(window).on('load', function(){
        //===== Prealoder
        $("#preloader").delay(400).fadeOut();

    });

    $(document).ready(function () {
        //05. sticky header
        function sticky_header(){
            var wind = $(window);
            var sticky = $('header');
            wind.on('scroll', function () {
                var scroll = wind.scrollTop();
                if (scroll < 100) {
                    sticky.removeClass('sticky');
                } else {
                    sticky.addClass('sticky');
                }
            });
        }
        sticky_header();
        //===== Back to top

        // Show or hide the sticky footer button
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 600) {
                $('.back-to-top').fadeIn(200)
            } else {
                $('.back-to-top').fadeOut(200)
            }
        });

        //Animate the scroll to yop
        $('.back-to-top').on('click', function (event) {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: 0,
            }, 900);
        });        

        // Hamburger-menu
        $('.hamburger-menu, .overlay').on('click', function () {
            $('.hamburger-menu .line-top, .menu, header').toggleClass('current');
            $('.hamburger-menu .line-center').toggleClass('current');
            $('.hamburger-menu .line-bottom').toggleClass('current');
        });

        $('.dropdown-menu').on('click', function(event){
            event.stopPropagation();
        });

        $('.owl-carousel.slider1').owlCarousel({
            loop: true,
            margin: 40,
            // autoplay: true,
            autoplayTimeout: 1500,
            autoplayHoverPause: true,
            dots: true,
            nav: true,
            responsive:{
                0:{
                    items: 1,
                    dots: true,
                },
                576:{
                    items: 2,
                    dots: true,
                },
                992:{
                    items: 3
                },
                1200:{
                    items: 3
                },
            }
        });

        $('.owl-carousel.slider2').owlCarousel({
            loop: false,
            margin: 0,
            items: 1,
            // autoplay: true,
            autoplayTimeout: 1500,
            autoplayHoverPause: true,
            dots: true,
            nav: true,
        });
        $('.owl-carousel.slider3').owlCarousel({
            loop: true,
            margin: 0,
            items: 1,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            dots: true,
            nav: false,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            smartSpeed:1500,
        }); 

        $('.proje_img').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            },        
        });

        $('.watch_btn').magnificPopup({
            type: 'iframe',
            iframe: {
                patterns: {
                    youtube: {
                      index: 'youtube.com/', 

                      id: 'v=',
                      src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                    },
                },

              srcAction: 'iframe_src',
            }
        });    

    });

})(jQuery);