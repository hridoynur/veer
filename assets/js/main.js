(function($){
    'use strict'

    // Mobile Menu
    
    $(document).ready(function(){

        $('.veer-hamburger i.fa-bars').on('click', function(){
            $('.veer-main-menu').animate({ left : 0 });
            $(this).hide();
            $('.veer-hamburger i.fa-times').show();
        });

        $('.veer-hamburger i.fa-times').on('click', function(){
            $('.veer-main-menu').animate({ left : -300 });
            $(this).hide();
            $('.veer-hamburger i.fa-bars').show();
        });
        

        // Venobox Plugin
        $('.venobox').venobox();

        /* Isotope Plugin:
         ------------------ */

        // filter items on button click
        $('.filter-button-group').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
        });
        var $grid = $('.grid').isotope({
        // set itemSelector so .grid-sizer is not used in layout
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
            // use element for option
            columnWidth: '.grid-item'
        }
        });

        // Owl Carousel Plugin
        $('.veer-logo-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:4
                }
            }
        })
        

        // ScrollTop Button :
    $(window).scroll( function(){
        var scrollTop = $(window).scrollTop();

        if (scrollTop > 2000) {
            $('.scroll-top').fadeIn();
        }
        else{
            $('.scroll-top').fadeOut();
        }
    }); 
    $('.scroll-top').on('click',function(){
        $('html').animate({scrollTop : 0 })
    });

    // Messenger : 
    $(window).scroll( function(){
        var scrollTop = $(window).scrollTop();

        if (scrollTop > 2000) {
            $('.messenger').fadeIn();
        }
        else{
            $('.messenger').fadeOut();
        }
    }); 

    $('.messenger').on( 'click', function (){
        $('html').animate({ scrollTop : 0 });
    });


        
        
        // End
    });

}) (jQuery);
    
