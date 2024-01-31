;(function($) {
    "use strict"
    
    // mixitup active js
  	$(".portfolio_images_action").mixItUp({
        animation: {
        effects: 'fade scale',
        duration: 700
	}
	});
    
    // Counterup active js
    $('.counter').counterUp({
        delay: 15,
        time: 2000
    });
    
    // PrettyPhoto active js
	$("a[rel^='prettyPhoto']").prettyPhoto();
    
    // Client slider active js
    $(".client_slider").owlCarousel({
        loop:true,
        margin:60,
        items : 3,
        dots:true,
        nav: false,
        autoPlay:true,
        controls: true,
        center: true,
        responsive:{
            0:{
                items:1,
                center: false,
            },
            767:{
                items:1,
                center: false,
            },
            768:{
                items:2,
                center: false,
            },
            1199:{
                items:2,
                center: false,
            },
            1200:{
                items:3,
            },
        }
  });
    
    // client active js
    $(".demo_two_client_slider").owlCarousel({
        rewindNav : true,
        loop:true,
        margin:30,
        items : 3,
        dots:true,
        nav: false,
        autoPlay:true,
        controls: true,
        responsiveClass:true,
        center: true,
        responsive:{
            0:{
                items:1,
                center: false
            },
            700:{
                items:2,
                center: false
            },
            992:{
                items:3,
                center: true,
            },
        }
    });
    
    // portfolio_image slider active js
    $(".portfolio_image.demo_two").owlCarousel({
		navigation : true,
		navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		rewindNav:true,
		pagination : false,
        scrollPerPage : false,
        loop:true,
        margin:0,
        items : 4,
        nav: false,
        autoPlay:true,
        paginationNumbers: false,
	    dots:false,
        controls: true,
        responsiveClass:true,
        responsive:{
            1920:{
                items:4,
                center: true
            },
            1280:{
                items:4,
                center: true
            },
            760:{
                items:2,
                center: true
            },
            320:{
                items:1,
                center: true
            }
        }
  });
    
    // Project main slider active js
    $('.priject_main_slider').owlCarousel({
        loop: true,
        items: 1,
        dots: true,
        nav: false,
        center: true,
        margin: 0,
        stagePadding: 420,
        autoplay: true,
    });
    
    // Can also be used with $(document).ready()
      $('.flexslider').flexslider({
        animation: "slide",
        itemWidth: 480,
        itemMargin: 0,
        maxItems: 4,
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        controlsContainer: $(".flexslider"),
        customDirectionNav: $(".custom-navigation a"),
      });
    
    // mixItUp slider active js
    $(function(){
        $('.gallery_item .slides').mixItUp();
    });

    
    $.stellar({
        horizontalScrolling: false,
        verticalOffset: 40
    });
    
    new WOW().init();
    
    $(window).load(function() { // makes sure the whole site is loaded
		 $('#preloader_spinner').fadeOut(); // will first fade out the loading animation
		 $('#preloader').delay(150).fadeOut('slow'); // will fade out the white DIV that covers the website.
		 $('body').delay(150).css({'overflow':'visible'})
     })
    
    
})(jQuery)

